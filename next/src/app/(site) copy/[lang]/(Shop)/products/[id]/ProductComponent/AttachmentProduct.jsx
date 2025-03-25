"use client"

export const AttachmentProduct = ({ item,assetsPath,mediaPath,local,Lang }) => {
    let videos = (item?.video)? item?.video?.split("###") : [];
    let documents = (item?.document)? item?.document?.split("###") : [];

    return(
		<>
            <section className="content-inner-3 pb-0">
                <div className="container">
                    <div className="product-description">
                        <div className="dz-tabs">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabIndex="0">
                                    <div className="detail-bx text-center">
                                        <ul className="feature-detail">
                                            {documents?.map((document,index)=>{
                                                return(
                                                    <li key={index}>
                                                        <i className="icon feather icon-check"></i>
                                                        <h5><a href={mediaPath+"/productGallery/"+document} target="_blank" rel="noopener noreferrer">{Lang("public.cart_detail_document")}</a></h5>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="row g-lg-4 g-3">
                                        {videos?.map((video,index)=>{
                                            return(
                                                <div className="col-xl-4 col-md-4 col-sm-4 col-6" key={index}>
                                                    <div className="related-img dz-media">
                                                        <a href={mediaPath+"/productGallery/"+video} target="_blank" rel="noopener noreferrer">{Lang("public.cart_detail_video")}</a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
    	</>
	);
}