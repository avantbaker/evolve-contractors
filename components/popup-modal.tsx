import React from 'react';

function PopupModal() {
	return (
		<div
			className="th-modal modal fade allow-natural-scroll"
			id="portfolioModal"
			tabIndex={-1}
			aria-hidden="true"
		>
			<div className="modal-dialog modal-xl">
				<div className="modal-content">
					<div className="container">
						<button
							type="button"
							className="icon-btn btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<i className="fa-regular fa-xmark" />
						</button>
						<div className="page-single bg-black2">
							<div className="page-img mb-30">
								<img
									className="w-100 rounded-20"
									src="/img/project/project_pop1_1.png"
									alt="portfolio Image"
								/>
							</div>
							<div className="page-content">
								<h2 className="h3 page-title text-white fw-medium">
									Building Construction
								</h2>
								<div className="row gy-30">
									<div className="col-xl-7">
										<p className="mb-20 text-light">
											Our post-construction services gives you peace of mind knowing that
											we are still here for you even after by graviton construction.
											Building construction is the process of planning, designing, and
											assembling structures.
										</p>
										<p className="mb-xl-5 mb-0 text-light">
											Building construction is essential for urban development, economic
											growth, and better living standards. It transforms architectural
											visions into real-world structures that serve communities,
											businesses, and industries.
										</p>
									</div>
									<div className="col-xl-5">
										<div className="checklist">
											<ul>
												<li className="text-light">
													<strong>Service Category:</strong> Rubix Carabil Tower
												</li>
												<li className="text-light">
													<strong>Clients:</strong> David Malan
												</li>
												<li className="text-light">
													<strong>Project Date:</strong> 13 June, 2023
												</li>
												<li className="text-light">
													<strong>Avenue End Date:</strong> 22 July, 2025
												</li>
												<li className="text-light">
													<strong>Locations:</strong> NewYork - 2546 Firs, USA
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="row gy-30 gx-40 align-items-center">
									<div className="col-xl-6">
										<div className="page-img mb-0">
											<img
												className="w-100"
												src="/img/project/project_1_2.png"
												alt="portfolio Image"
											/>
										</div>
									</div>
									<div className="col-xl-6">
										<h4 className="box-title text-white fw-medium">Services Benefits:</h4>
										<p className="text-light">
											We can do both. We can adhere to existing brand guidelines, ensuring
											consistency, or help develop new ones if a client is looking for a
											fresh identity. Our goal is to align the UI/UX design with the
											brand's overall strategy product meets the needs.
										</p>
										<div className="checklist style3">
											<ul>
												<li className="text-light">
													<i className="far fa-check-circle" />
													We use the latest diagnostic equipment
												</li>
												<li className="text-light">
													<i className="far fa-check-circle" />
													Automotive service our clients receive
												</li>
												<li className="text-light">
													<i className="far fa-check-circle" />
													We are a member of Professional Service
												</li>
												<li className="text-light">
													<i className="far fa-check-circle" />
													Digital how will activities impact traditional
												</li>
												<li className="text-light">
													<i className="far fa-check-circle" />
													Architect and technical engineer
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopupModal;
