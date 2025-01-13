import { Link } from "react-router";
// import SecondList from "./SecondList";

// import Subsen from '../../../assets/sub-second-hand.png'
import { useState } from "react";

import PurchaseData from '../data/PurchaseData.json'





const SpSecondHand = () => {

    const [ secondhand, setSecondHand ] = useState("Recommendation");

    const secondList = PurchaseData.Purchase[secondhand];


    return(

        // <div className="second">
        //    <Link to="/買取商品の詳細" className="second-item-line"> <SecondList items={secondItems} /> </Link>
        // </div>

        <>
            <div className="sp-second-container">
              <form className="second-form">
                <label htmlFor="second" className="second-label">並べる替え：</label>
                <select 
                id="second"
                className="second-select"
                onChange={(e) => setSecondHand(e.target.value)}
                >
                    <option value="Recommendation">おすすめ</option>
                    <option value="Popularity">人気順</option>
                    <option value="Highprice">買取金額が高い順</option>
                </select>
              </form>

              {/* <div className="pape">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
              */}
              <div className="sp-second-item-list">
              
                {secondList.map((seconds, index) => (
                    <div className="second-card" key={index}>
                        <Link to="/買取商品の詳細"><img src={seconds.img} alt="2" /></Link>
                        <div className="second-infor">
                        <p className="second-brand">{seconds.brand}</p>
                        <p className="second-name">{seconds.name}</p>
                        <p className="second-status">{seconds.status}</p>
                        <p className="second-price">〜¥{seconds.price}</p>
                        </div>
                        
                    </div>
               
                ))}
              </div>
              {/* <div className="pape2">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div> */}
             
            </div>
        </>
    )
}

export default SpSecondHand;