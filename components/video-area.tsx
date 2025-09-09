import React from 'react';

function VideoArea() {
	return (
		<div className="container">
			<div className="video-area-1 ">
				<div className="video-wrap1">
					<div
						className="video-box1"
						data-overlay="black2"
						data-opacity={3}
						data-mask-src="/img/shape/video_1_1_mask.png"
					>
						<img src="/img/evolve/why-choose/four-square-img.jpg" alt="img" />
						{/* <a
							href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
							className="play-btn style3 popup-video"
						>
							<i className="fa-sharp fa-solid fa-play" />
						</a> */}
					</div>
					<div className="video-wrap-details">
						<div className="title-area mb-45">
							<h2 className="sec-title">
								Why Choose Us For Your Commercial Roofing Needs
							</h2>
							<p className="sec-text">
								Choosing us for your commercial roofing means getting certified expertise,
								durable materials, and reliable service—all focused on protecting your
								investment for the long term.
							</p>
						</div>
						<div className="row gy-4">
							<div className="col-sm-6">
								<div className="why-info-card">
									<div className="box-icon">
										<img src="/img/icon/checkmark2.svg" alt="img" />
									</div>
									<h4 className="box-title">Quality Control System</h4>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="why-info-card">
									<div className="box-icon">
										<img src="/img/icon/checkmark2.svg" alt="img" />
									</div>
									<h4 className="box-title">100% Satisfaction Guarantee</h4>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="why-info-card">
									<div className="box-icon">
										<img src="/img/icon/checkmark2.svg" alt="img" />
									</div>
									<h4 className="box-title">Highly Professional Staff</h4>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="why-info-card">
									<div className="box-icon">
										<img src="/img/icon/checkmark2.svg" alt="img" />
									</div>
									<h4 className="box-title">Accurate Testing Processes</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoArea;
