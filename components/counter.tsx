import React from 'react';

function Counter() {
	return (
		<div className="counter-area-1">
			<div className="container">
				<div className="counter-card-wrap space">
					<div className="counter-card">
						<div className="media-body">
							<h2 className="box-number">
								$<span className="counter-number">19.4</span>M
							</h2>
							<p className="box-text">COMPLETED & ACTIVE CONTRACTS</p>
						</div>
					</div>
					<div className="counter-card">
						<div className="media-body">
							<h2 className="box-number">
								$<span className="counter-number">5</span>M
							</h2>
							<p className="box-text">BOND CAPACITY</p>
						</div>
					</div>
					<div className="counter-card">
						<div className="media-body">
							<h2 className="box-number">
								$<span className="counter-number">34</span>M
							</h2>
							<p className="box-text">2025 BID TOTAL</p>
						</div>
					</div>
					<div className="counter-card">
						<div className="media-body">
							<h2 className="box-number">
								<span className="counter-number">50</span>+
							</h2>
							<p className="box-text">YEARS OF EXPERIENCE</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Counter;
