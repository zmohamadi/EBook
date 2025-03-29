"use client"

import React, { useContext,useEffect } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const Price = ({ Lang }) => {
	useEffect(() => {
		// loadPriceslider()
	}, []);
	
	const loadPriceslider = () => {
		if($("#slider-tooltips").length > 0 || $("#slider-tooltips2").length > 0){
			priceslider();
		}else{
			setTimeout(loadPriceslider, 1000)
		}
	}
	const priceslider = () => {
		if ($("#slider-tooltips").length > 0) {
			var tooltipSlider = document.getElementById('slider-tooltips');

			var formatForSlider = {
				from: function (formattedValue) {
					return Number(formattedValue);
				},
				to: function (numericValue) {
					return Math.round(numericValue);
				}
			};

			noUiSlider.create(tooltipSlider, {
				start: [40, 346],
				connect: true,
				format: formatForSlider,
				tooltips: [wNumb({ decimals: 1 }), true],
				range: {
					'min': 0,
					'max': 400
				}
			});
			var formatValues = [
				document.getElementById('slider-margin-value-min'),
				document.getElementById('slider-margin-value-max')
			];
			tooltipSlider.noUiSlider.on('update', function (values, handle, unencoded) {
				formatValues[0].innerHTML = "Min Price: " + "$" + values[0];
				formatValues[1].innerHTML = "Max Price: " + "$" + values[1];
			});
		}
		if ($("#slider-tooltips2").length > 0) {
			var tooltipSlider = document.getElementById('slider-tooltips2');

			var formatForSlider = {
				from: function (formattedValue) {
					return Number(formattedValue);
				},
				to: function (numericValue) {
					return Math.round(numericValue);
				}
			};

			noUiSlider.create(tooltipSlider, {
				start: [40, 346],
				connect: true,
				format: formatForSlider,
				tooltips: [wNumb({ decimals: 1 }), true],
				range: {
					'min': 0,
					'max': 400
				}
			});
			var formatValues = [
				document.getElementById('slider-margin-value-min2'),
				document.getElementById('slider-margin-value-max2')
			];
			tooltipSlider.noUiSlider.on('update', function (values, handle, unencoded) {
				formatValues[0].innerHTML = "Min Price: " + "$" + values[0];
				formatValues[1].innerHTML = "Max Price: " + "$" + values[1];
			});
		}
	}
	const { dispatch } = useContext(ProductContext);
	// const handleFilter = (e) => {
	// 	if (e.key === 'Enter') {
	// 		dispatch('SET_MIN', { filter: e.target.value });
	// 		dispatch('SET_MAX', { filter: e.target.value });
	// 	}
	// };

    return(
		<>
			<div className="widget" style={{direction:"rtl"}}>
			{/* <div className="widget"> */}
				<h6 className="widget-title">{Lang("public.price")}</h6>
				<div className="price-slide range-slider">
					<div className="price">
						<div className="range-slider style-1">
							<div id="slider-tooltips2" className="mb-3"></div>
							<span className="example-val" id="slider-margin-value-min2">{("public.min_price")}</span>
							<span className="example-val" id="slider-margin-value-max2">{("public.max_price")}</span>
						</div>
					</div>
				</div>
			</div>
    	</>
	);
}