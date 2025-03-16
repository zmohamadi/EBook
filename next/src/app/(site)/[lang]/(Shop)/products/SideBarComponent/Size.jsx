"use client"
export const Size = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget">
				<h6 className="widget-title">Size</h6>
				<div className="btn-group product-size">
					<input type="radio" className="btn-check" name="btnradio1" id="btnradio101" checked=""/>
					<label className="btn" for="btnradio101">4</label>

					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol02"/>
					<label className="btn" for="btnradiol02">6</label>

					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol03"/>
					<label className="btn" for="btnradiol03">8</label>
				
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol04"/>
					<label className="btn" for="btnradiol04">10</label>
					
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol05"/>
					<label className="btn" for="btnradiol05">12</label>
					
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol06"/>
					<label className="btn" for="btnradiol06">14</label>
					
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol07"/>
					<label className="btn" for="btnradiol07">16</label>
					
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol08"/>
					<label className="btn" for="btnradiol08">18</label>
					
					<input type="radio" className="btn-check" name="btnradio1" id="btnradiol09"/>
					<label className="btn" for="btnradiol09">20</label>
				</div>
			</div>
    	</>
	);
}