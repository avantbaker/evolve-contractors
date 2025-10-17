'use client';

import type { MouseEventHandler } from 'react';
import { useCallback, useEffect } from 'react';
import { useProjectModal } from '@/components/project-modal-provider';

function cx(...classes: Array<string | null | undefined | false>) {
	return classes.filter(Boolean).join(' ');
}

function PopupModal() {
	const { isOpen, project, closeModal } = useProjectModal();

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		},
		[closeModal]
	);

	useEffect(() => {
		if (!isOpen) {
			return undefined;
		}

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown, isOpen]);

	const shouldRender = Boolean(project || isOpen);

	if (!shouldRender) {
		return null;
	}

	const modalClassName = cx('th-modal modal fade allow-natural-scroll', isOpen && 'show');
	const backdropClassName = cx('modal-backdrop fade', isOpen && 'show');

	const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (event) => {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

	return (
		<>
			<div
				className={backdropClassName}
				style={{ display: shouldRender ? 'block' : 'none' }}
				onClick={closeModal}
				aria-hidden={!isOpen}
			/>
			<div
				className={modalClassName}
				role="dialog"
				aria-modal={isOpen}
				aria-hidden={!isOpen}
				style={{ display: shouldRender ? 'block' : 'none' }}
				onClick={handleBackdropClick}
				data-lenis-prevent
			>
				<div className="modal-dialog modal-dialog-scrollable modal-xl" data-lenis-prevent>
					<button
						type="button"
						className="icon-btn btn-close project-modal__close"
						aria-label="Close"
						style={{ position: 'absolute', top: '-40px', right: '0px', zIndex: 10 }}
						onClick={closeModal}
					>
						<i className="fa-regular fa-xmark" />
					</button>
					<div className="modal-content project-modal relative" data-lenis-prevent>
						<div className="modal-body" style={{ padding: 0 }} data-lenis-prevent>
							{project ? (
								<div className="page-single bg-black2">
									<div className="page-img mb-30">
										<img
											className="w-100 rounded-20"
											src={project.heroImage}
											alt={`${project.title} hero`}
										/>
									</div>
									<div className="page-content px-4 px-lg-5 pb-5">
										<div className="row gy-30">
											<div className="col-xl-7">
												{project.summary.map((paragraph, index) => (
													<p
														key={`${project.id}-summary-${index}`}
														className={cx(
															'text-light',
															index === 0 ? 'mb-20' : 'mb-xl-5 mb-0'
														)}
													>
														{paragraph}
													</p>
												))}
											</div>
											{project.meta.length > 0 ? (
												<div className="col-xl-5">
													<div className="checklist">
														<ul>
															{project.meta.map((item) => (
																<li
																	key={`${project.id}-meta-${item.label}`}
																	className="text-light"
																>
																	<strong>{item.label}:</strong> {item.value}
																</li>
															))}
														</ul>
													</div>
												</div>
											) : null}
										</div>
										<div className="row gy-30 gx-40 align-items-center">
											{project.secondaryImage ? (
												<div className="col-xl-6">
													<div className="page-img mb-0">
														<img
															className="w-100"
															src={project.secondaryImage}
															alt={`${project.title} detail`}
														/>
													</div>
												</div>
											) : null}
											<div
												className={cx(project.secondaryImage ? 'col-xl-6' : 'col-xl-12')}
											>
												{project.benefitsTitle ? (
													<h4 className="box-title text-white fw-medium">
														{project.benefitsTitle}
													</h4>
												) : null}
												{project.benefitsDescription ? (
													<p className="text-light">{project.benefitsDescription}</p>
												) : null}
												{project.benefits && project.benefits.length > 0 ? (
													<div className="checklist style3">
														<ul>
															{project.benefits.map((benefit, index) => (
																<li
																	key={`${project.id}-benefit-${index}`}
																	className="text-light"
																>
																	<i className="far fa-check-circle" />
																	{benefit}
																</li>
															))}
														</ul>
													</div>
												) : null}
											</div>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PopupModal;
