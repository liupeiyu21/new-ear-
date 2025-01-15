import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";
import ReadIcon from "/top-read.png"


import "../PcTop.css" 
import Reading from "/top-reading.png"

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5","Slide 6","Slide 7","Slide 8"] ;

function ReadingItem() {
    return(
        <>
    <div className="reading-item">
        <img className="sp-reading" src={ReadIcon} alt="" />
        <div className="reading-more">
            <h2><img className="rea-span" src={ReadIcon} alt="キャラクター" />e☆イヤホンの読みもの！</h2>
            <p>もっと見る</p>
        </div>
        <Swiper
           modules={[Pagination, Navigation]}
 
        
           navigation={true}
          
       
            breakpoints={{
                375:{
                    slidesPerView:1,
                    spaceBetween:10,
                },
                640:{
                    slidesPerView:1,
                    spaceBetween:10,
                },
                768: {
                    slidesPerView:2,
                    spaceBetween:10,
                },
                1024:{
                    slidesPerView:4,
                    spaceBetween:15,
                }
            }} 
           
        >
        <div className="reading-card">
        
            {data.map( ( index) => (
                <SwiperSlide key={index}>
                    <img src={Reading} alt="読み物のバナーです。" />
                    <h3 className="read-title">【2024年11月最新】 PS5におすすめのヘッドセット4選</h3>
                    <p className="read-sentence">ワイヤレスモデルや3Dオーディオに最適なモデルまでご紹介！</p>
               
                </SwiperSlide>
            ))

            }
        </div>
            
        </Swiper>
    </div>
        </>
    )
}

export default ReadingItem;