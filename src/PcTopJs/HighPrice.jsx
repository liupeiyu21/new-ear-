import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";

import HeighIcon from "/pc-top-heighprice-icon.png"

import HightPri from "/pc-hightprice.png"
import "../PcTop.css" 


const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5","Slide 6","Slide 7","Slide 8"] ;

function HighPrice() {
    return(
        <>
    <div className="heighprice">
        <img className="sp-heigh" src={HeighIcon} alt="" />
        <div className="heigh-more">
            <h2><img className="he-span" src={HeighIcon} alt="キャラクター" />高価買取中</h2>
            <p>もっと見る</p>
        </div>
        <Swiper
           modules={[Pagination, Navigation]}
 
        
           navigation={true}
          
       
            breakpoints={{
                375:{
                    slidesPerView:2,
                    spaceBetween:10,
                },
                640:{
                    slidesPerView:3,
                    spaceBetween:10,
                },
                768: {
                    slidesPerView:3,
                    spaceBetween:10,
                },
                1024:{
                    slidesPerView:6,
                    spaceBetween:15,
                }
            }} 
           
        >
        <div className="recentlycheck-card">
            {data.map( () => (
                <SwiperSlide>
                    <img className="check-img" src={HightPri} alt="2" />
                    <p className="check-brand">ブランド名</p>
                    <p className="check-name">商品の名前</p>
                    <p className="heighprice-status">最高買取金額</p>
                    <p className="check-price">¥600,000<span className="check-tax">税込</span></p>      
                </SwiperSlide>
            ))

            }
        </div>
            
        </Swiper>
    </div>
        </>
    )
}

export default HighPrice;