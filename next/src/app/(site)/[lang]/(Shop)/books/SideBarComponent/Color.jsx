"use client"
export const Color = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget">
				<h6 className="widget-title">Color</h6>
				<div className="d-flex align-items-center flex-wrap color-filter ps-2">
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel01" value="#000000" aria-label="..." checked/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel02" value="#9BD1FF" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel03" value="#21B290" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel04" value="#FEC4C4" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel05" value="#FF7354" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel06" value="#51EDC8" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel07" value="#B77CF3" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel08" value="#FF4A76" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel09" value="#3E68FF" aria-label="..."/>
						<span></span>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF68" aria-label="..."/>
						<span></span>
					</div>
				</div>
			</div>
    	</>
	);
}