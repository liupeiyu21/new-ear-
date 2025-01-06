import { useState } from "react";
import StaffReviewData from "../data/StaffReview.json";
import StaffIcon from "/top-staff.png"

function StaffReview2() {
    
    const [ selectReview, setSelectReview] = useState("NewReview");
    const reviewList = StaffReviewData.Staffreview[selectReview];
    
    return(
        <>
        <div className="staff-review-contents">
            <div className="staff-title">
            <div className="staff-title">
            <h2><span ><img className="staff-span" src={StaffIcon} alt="キャラクター" /></span>スタッフレビュー</h2>
            <div className="staff-review-category">
                <span 
                className={selectReview === "NewReview" ? "review" : ""}
                onClick={() => setSelectReview("NewReview")}
                >
                新着</span>
                <span 
                className={selectReview === "Popularity" ? "review" : "" }
                onClick={() => setSelectReview("Popularity")}
                >
                人気</span>
                
            </div>
            </div>
            <p>もっと見る</p>
            </div>
            <div className="review-list">
                {reviewList.map((review, index) => (
                    <div className="review-card" key={index}>
                        <img src={review.img} alt="商品の写真" />
                        <p className="reviews-brand">{review.brand}</p>
                        <p className="reviews-name">{review.name}</p>
                        <div className="reviews-spans">
                            <p className="reviews-category1">{review.category1}</p>
                            <p className="reviews-category2">{review.category2}</p>
                        </div>
                        <p className="reviews-title">{review.title}</p>
                        <p className="reviews-sentence">{review.sentence}</p>
                        <img src={review.icon} alt="アイコンです" />
                        <p className="staff-name">{review.staffname}</p>
                        <p className="reviews-address">{review.address}</p>
                    </div>
                ))
                }
            </div>
            {/* <div className="staff-btns">
            <button className="staff-review-btn">もっと見る</button>
            </div> */}
        </div>
        </>   
    )
}
export default StaffReview2;