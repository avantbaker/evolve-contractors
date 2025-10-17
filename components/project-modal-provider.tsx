'use client';

import {
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import PopupModal from '@/components/popup-modal';

export type ProjectModalMetaItem = {
	label: string;
	value: string;
};

export type ProjectModalData = {
	id: string;
	title: string;
	heroImage: string;
	summary: string[];
	meta: ProjectModalMetaItem[];
	secondaryImage?: string;
	benefitsTitle?: string;
	benefitsDescription?: string;
	benefits?: string[];
};

type ProjectModalContextValue = {
	isOpen: boolean;
	project: ProjectModalData | null;
	openModal: (project: ProjectModalData) => void;
	closeModal: () => void;
};

const ProjectModalContext = createContext<ProjectModalContextValue | undefined>(
	undefined
);

export function ProjectModalProvider({ children }: PropsWithChildren) {
	const [project, setProject] = useState<ProjectModalData | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [container, setContainer] = useState<HTMLElement | null>(null);
	const closeTimeoutRef = useRef<number | null>(null);
	const scrollLockRef = useRef({
		bodyOverflow: '',
		bodyPaddingRight: '',
		htmlOverflow: '',
		htmlPaddingRight: '',
		scrollbarCompensationApplied: false,
		scrollLocked: false,
	});

	useEffect(() => {
		const modalRoot = document.createElement('div');
		modalRoot.setAttribute('id', 'project-modal-root');
		document.body.appendChild(modalRoot);
		setContainer(modalRoot);

		return () => {
			if (closeTimeoutRef.current !== null) {
				window.clearTimeout(closeTimeoutRef.current);
			}
			document.body.classList.remove('modal-open');
			document.body.removeChild(modalRoot);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			if (typeof window !== 'undefined') {
				window.dispatchEvent(new CustomEvent('project-modal:open'));
			}
			document.body.classList.add('modal-open');
			if (closeTimeoutRef.current !== null) {
				window.clearTimeout(closeTimeoutRef.current);
				closeTimeoutRef.current = null;
			}
		} else {
			if (typeof window !== 'undefined') {
				window.dispatchEvent(new CustomEvent('project-modal:close'));
			}
			closeTimeoutRef.current = window.setTimeout(() => {
				setProject(null);
				document.body.classList.remove('modal-open');
			}, 300);
		}

		return () => {
			if (!isOpen && closeTimeoutRef.current !== null) {
				window.clearTimeout(closeTimeoutRef.current);
				closeTimeoutRef.current = null;
			}
		};
	}, [isOpen]);

	const restoreScrollLock = useCallback(() => {
		const state = scrollLockRef.current;
		if (!state.scrollLocked) {
			return;
		}

		const html = document.documentElement;
		document.body.style.overflow = state.bodyOverflow;
		document.body.style.paddingRight = state.bodyPaddingRight;
		html.style.overflow = state.htmlOverflow;
		html.style.paddingRight = state.htmlPaddingRight;
		state.bodyOverflow = '';
		state.bodyPaddingRight = '';
		state.htmlOverflow = '';
		state.htmlPaddingRight = '';
		state.scrollbarCompensationApplied = false;
		state.scrollLocked = false;
	}, []);

	useEffect(() => {
		const isModalActive = Boolean(project || isOpen);
		const state = scrollLockRef.current;
		const html = document.documentElement;

		if (isModalActive && !state.scrollLocked) {
			state.bodyOverflow = document.body.style.overflow;
			state.bodyPaddingRight = document.body.style.paddingRight;
			state.htmlOverflow = html.style.overflow;
			state.htmlPaddingRight = html.style.paddingRight;

			const scrollbarWidth = window.innerWidth - html.clientWidth;

			document.body.style.overflow = 'hidden';
			html.style.overflow = 'hidden';

			if (scrollbarWidth > 0) {
				const bodyComputedPadding = window.getComputedStyle(document.body).paddingRight;
				const htmlComputedPadding = window.getComputedStyle(html).paddingRight;
				const numericBodyPadding = parseFloat(bodyComputedPadding || '0');
				const numericHtmlPadding = parseFloat(htmlComputedPadding || '0');
				document.body.style.paddingRight = `${numericBodyPadding + scrollbarWidth}px`;
				html.style.paddingRight = `${numericHtmlPadding + scrollbarWidth}px`;
				state.scrollbarCompensationApplied = true;
			}

			state.scrollLocked = true;
		}

		if (!isModalActive && state.scrollLocked) {
			restoreScrollLock();
		}
	}, [isOpen, project, restoreScrollLock]);

	useEffect(
		() => () => {
			restoreScrollLock();
		},
		[restoreScrollLock]
	);

	const openModal = useCallback((modalData: ProjectModalData) => {
		setProject(modalData);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const contextValue = useMemo<ProjectModalContextValue>(
		() => ({
			isOpen,
			project,
			openModal,
			closeModal,
		}),
		[isOpen, project, openModal, closeModal]
	);

	return (
		<ProjectModalContext.Provider value={contextValue}>
			{children}
			{container && (project || isOpen) ? createPortal(<PopupModal />, container) : null}
		</ProjectModalContext.Provider>
	);
}

export function useProjectModal() {
	const context = useContext(ProjectModalContext);

	if (!context) {
		throw new Error('useProjectModal must be used within a ProjectModalProvider');
	}

	return context;
}
