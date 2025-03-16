"use client"
export const Error404 = ({ assetsPath }) => {
    return(
		<>	
			<div className="page-content bg-light">
				<section className="content-inner-1">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-8 col-lg-10 col-md-12">
								<div className="error-page style-1">
									<div className="dz-error-media">
										<img src={assetsPath+"/pixio/images/pic-404.png"} alt=""/>
									</div>
									<div className="error-inner">
										<h1 className="dz_error">404</h1>
										<p className="error-head">Oh, no! This page does not exist.</p>
										<a href="index.html" className="btn btn-secondary  text-uppercase">Go to Main Page</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>	
			</div>
    	</>
	);
}