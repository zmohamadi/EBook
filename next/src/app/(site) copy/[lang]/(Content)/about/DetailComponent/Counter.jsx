"use client"
import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";

export const Counter = ({ local, Lang }) => {
	
	return(
		<>
			<section className="dz-bnr-inr dz-bnr-inr-sm bg-light">
				<div className="container">
					<div className="dz-bnr-inr-entry ">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-7">
								<div className="text-start mb-xl-0 mb-4">
									<h1>Your Fashion Journey Starts Here Discover Style at Pixio</h1>
									<BreadCrumb local={local} />
									{/* <nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><a href="index.html"> Home</a></li>
											<li className="breadcrumb-item">About us</li>
										</ul>
									</nav> */}
								</div>							
							</div>
							<div className="col-lg-5 col-md-5 ">
								<div className="about-sale  text-start">
									<div className="row">
										<div className="col-lg-5 col-md-6 col-6">
											<div className="about-content">
												<h2 className="title"><span className="counter">50</span>+</h2>
												<p className="text">Items Sale</p>
											</div>
										</div>
										<div className="col-lg-5 col-md-6 col-6">
											<div className="about-content">
												<h2 className="title">400%</h2>
												<p className="text">Return on investment </p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
    	</>
	);
};