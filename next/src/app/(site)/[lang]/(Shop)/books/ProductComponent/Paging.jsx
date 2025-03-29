"use client"
export const Paging = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="row page mt-0">
				<div className="col-md-6">
					<p className="page-text">Showing 1–5 Of 50 Results</p>
				</div>
				<div className="col-md-6">
					<nav aria-label="Blog Pagination">
						{/* {hasMore && !loading && ( */}
						{/* {1 && (
							<button onClick={loadMore}>Load More</button>
						)} */}
						<ul className="pagination style-1">
							<li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
							<li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
							<li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
							<li className="page-item"><a className="page-link next" href="javascript:void(0);">Next</a></li>
						</ul>
					</nav>
				</div>
				{/* <div className="col-md-6">
					<nav aria-label="Blog Pagination">
						<ul className="pagination style-1">
							<li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
							<li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
							<li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
							<li className="page-item"><a className="page-link next" href="javascript:void(0);">Next</a></li>
						</ul>
					</nav>
				</div> */}
			</div>					
    	</>
	);
}