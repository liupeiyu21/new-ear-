import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";


import "../PcTop.css" 
import Recently from "/pc-top-recentlycheck.png"
import RecentlyIcon from "/pc-top-recently-icon.png"

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5","Slide 6","Slide 7","Slide 8"] ;

function Recentlycheck() {
    return(
        <>
    <div className="recentlycheck">
        <img className="sp-ca" src={RecentlyIcon} alt="" />
        <h2><span ><img className="ca-span" src={RecentlyIcon} alt="キャラクター" /></span>最近チェックした商品</h2>
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
                    <img className="check-img" src={Recently} alt="2" />
                    <p className="check-brand">ブランド名</p>
                    <p className="check-name">商品の名前</p>
                    <p className="check-status">新品</p>
                    <p className="check-price">¥500,000<span className="check-tax">税込</span></p>      
                </SwiperSlide>
            ))

            }
        </div>
            
        </Swiper>
    </div>
        </>
    )
}

export default Recentlycheck;