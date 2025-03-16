"use client"

export const LoadMore = ({ onClick ,Lang }) => {

    return(
		<>
			<div className="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.7s">
				<a href="javascript:void(0);" className="btn btn-secondary" onClick={onClick}>
					{Lang("public.load_more")}
				</a>
			</div>
		</>
	);
};