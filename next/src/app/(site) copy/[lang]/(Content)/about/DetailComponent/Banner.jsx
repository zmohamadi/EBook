"use client"

export const Banner = ({ assetsPath,local,Lang }) => {
	
    return(
		<>
			<section className="about-banner overflow-visible">
				<video autoplay loop muted id="video-background">
					<source src={assetsPath+"/pixio/images/background/bg-video.mp4"} type="video/mp4" />
				</video>
				<div className="about-info">
					<h3 className="dz-title">
						<a href="about-me.html">why Pixio ?</a>
					</h3>
					<p className="text mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use</p>
				</div>
			</section>
    	</>
	);
}