"use client"
import {useEffect} from "react"

export const TabsProduct = ({ item,assetsPath,mediaPath,local,Lang }) => {
    useEffect(() => {
        // setTimeout(() => {
            loadTab();
        // }, 700);
	}, []);
    const loadTab = ()=>{
        
	// $('a[data-bs-toggle="tab"]').click(function () {
	// 	$('a[data-bs-toggle="tab"]').click(function () {
	// 		$($(this).attr('href')).show().addClass('show active').siblings().hide();
	// 	})
	// });
        if(item){
            jQuery('.wishlist-link').on('click', function () {
                jQuery('.product-description .nav-tabs button[data-bs-target="#wishlist-pane"]').tab('show');
            })
            jQuery('.cart-btn').on('click', function () {
                jQuery('.product-description .nav-tabs button[data-bs-target="#shopping-cart-pane"]').tab('show');
            })
        }
        else{
			setTimeout(() => loadTab(), 1000);
		}
    }

    return(
		<>
            <section className="content-inner-3 pb-0">
                <div className="container">
                    <div className="product-description">
                        <div className="dz-tabs">
                            <ul className="nav nav-tabs center" id="myTab1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" type="button" role="tab" aria-controls="description-tab-pane" aria-selected="true">{Lang("public.description")}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="usage-tab" data-bs-toggle="tab" data-bs-target="#usage-tab-pane" type="button" role="tab" aria-controls="usage-tab-pane" aria-selected="false">{Lang("public.usage")}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review-tab-pane" type="button" role="tab" aria-controls="review-tab-pane" aria-selected="false">{Lang("public.reviews")}</button>
                                </li>
                                {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment-tab-pane" type="button" role="tab" aria-controls="comment-tab-pane" aria-selected="false">{Lang("public.comments")+"(12)"}</button>
                                </li> */}
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabIndex="0">
                                    <div className="detail-bx text-center">
                                        <h5 className="title">{Lang("public.Flawless Denim Delights")}</h5>
                                        <p className="para-text" dangerouslySetInnerHTML={{__html: item?.description}}></p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="usage-tab-pane" role="tabpanel" aria-labelledby="usage-tab" tabIndex="0">
                                    <div className="detail-bx text-center">
                                        <h5 className="title">{Lang("public.Flawless Denim Delights")}</h5>
                                        <p className="para-text" dangerouslySetInnerHTML={{__html: item?.usage}}></p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="review-tab-pane" role="tabpanel" aria-labelledby="review-tab" tabIndex="0">
                                    <div className="detail-bx text-center">
                                        <h5 className="title">{Lang("public.Flawless Denim Delights")}</h5>
                                        <p className="para-text" dangerouslySetInnerHTML={{__html: item?.review}}></p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="comment-tab-pane" role="tabpanel" aria-labelledby="comment-tab" tabIndex="0">
                                    <div className="clear" id="comment-list">
                                        <div className="post-comments comments-area style-1 clearfix">
                                            <h4 className="comments-title mb-2">{Lang("public.comments")+"(02)"}</h4>
                                            <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                            <div id="comment">
                                                <ol className="comment-list">
                                                    <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                        <div className="comment-body">
                                                        <div className="comment-author vcard">
                                                                <img src={assetsPath+"/pixio/images/profile4.jpg"} alt="/" className="avatar" />
                                                                <cite className="fn">Michel Poe</cite> 
                                                        </div>
                                                    <div className="comment-content dz-page-text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                    <div className="reply">
                                                        <a rel="nofollow" className="comment-reply-link" href="javascript:void(0);">Reply</a>
                                                    </div>
                                                </div>
                                                <ol className="children">
                                                    <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                        <div className="comment-body" id="div-comment-3">
                                                            <div className="comment-author vcard">
                                                            <img src={assetsPath+"/pixio/images/profile3.jpg"} alt="/" className="avatar" />
                                                            <cite className="fn">Celesto Anderson</cite>
                                                            </div>
                                                            <div className="comment-content dz-page-text">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </div>
                                                            <div className="reply">
                                                            <a className="comment-reply-link" href="javascript:void(0);"> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                </li>
                                                <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                                    <div className="comment-body" id="div-comment-4">
                                                        <div className="comment-author vcard">
                                                            <img src={assetsPath+"/pixio/images/profile2.jpg"} alt="/" className="avatar" />
                                                            <cite className="fn">Monsur Rahman Lito</cite>
                                                        </div>
                                                        <div className="comment-content dz-page-text">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <a className="comment-reply-link" href="javascript:void(0);"> Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="default-form comment-respond style-1" id="respond">
                                            <h4 className="comment-reply-title mb-2" id="reply-title">Good Comments</h4>
                                            <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                            <div className="comment-form-rating d-flex">
                                                <label className="pull-left m-r10 m-b20  text-secondary">Your Rating</label>
                                                <div className="rating-widget">
                                                    {/* Rating Stars Box */}
                                                    <div  className="rating-stars">
                                                        <ul id="stars">
                                                            <li className="star" title="Poor" data-value="1">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Fair" data-value="2">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Good" data-value="3">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Excellent" data-value="4">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="WOW!!!" data-value="5">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix">
                                                <form method="post" id="comments_form" className="comment-form" noValidate>
                                                <p className="comment-form-author"><input id="name" placeholder="Author" name="author" type="text" value="" /></p>
                                                <p className="comment-form-email"><input id="email" required="required" placeholder="Email" name="email" type="email" value="" /></p>
                                                <p className="comment-form-comment"><textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" cols="45" rows="3" required="required"></textarea></p>
                                                <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                    <button id="submit" type="submit" className="submit btn btn-secondary btnhover3 filled">
                                                    Submit Now
                                                    </button>
                                                </p>
                                                </form>
                                            </div>
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
}