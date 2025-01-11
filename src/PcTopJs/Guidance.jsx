import React from "react";
import TopGuidance1 from '/top-guidance1.png'
import TopGuidance2 from '/top-guidance2.png'
import TopGuidance3 from '/top-guidance3.png'
import TopGuidance4 from '/top-guidance4.png'
import TopGuidance5 from '/top-guidance5.png'
import TopGuidance6 from '/top-guidance6.png'
import TopGuidance7 from '/top-guidance7.png'
import TopGuidance8 from '/top-guidance8.png'


function Guidance() {
    return(
        <>
        <div className="guidance">
        <h2 className="guidance-title">e☆イヤホンのご案内</h2>
        <div className="guidance-content">
            <div className="guidance-time guidance-num">
                <h3>16時までのご注文は即日出荷</h3>
                <p>16時までのご注文で入金が確認できれば、当日中に出荷いたします。</p>
                <p>※名古屋大須店にある商品については15時までのご注文分が当日発送となります。クレジットカードや代金引換ならば、確認作業がスムーズなため、最速での出荷が可能です。</p>
            </div>

            <div className="guidance-money guidance-num">
                <h3>お支払い方法</h3>
                <p>各種クレジットカード(一括・分割・リボ)、Amazon Pay、楽天ペイ、銀行振込、代金引換、コンビニ決済、などがお選びいただけます。</p>
                <div className="guidance-5  ">
                    <img src={TopGuidance1} alt="銀行カードマック" />
                    <img src={TopGuidance2} alt="銀行カードマック" />
                    <img src={TopGuidance3} alt="銀行カードマック" />
                    <img src={TopGuidance4} alt="銀行カードマック" />
                    <img src={TopGuidance5} alt="銀行カードマック" />
                </div>
                <div className="guidance-8">
                    <img src={TopGuidance6} alt="銀行カードマック" />
                    <img src={TopGuidance7} alt="銀行カードマック" />
                    <img src={TopGuidance8} alt="銀行カードマック" />
                </div>
                <div className="guidance-method">
                    <p className="band">銀行振込</p>
                    <p className="allowance">代金引換</p>
                    <p className="store1">コンビニ</p>
                </div>
            </div>
            <div className="guidance-work guidance-num">
                    <h3>年中無休で毎日出荷</h3>
                    <p>e☆イヤホンは年中無休で営業しています。休まず出荷いたします。</p>
            </div>
            <div className="guidance-free guidance-num">
                <h3>新品3千円以上お買上で送料無料</h3>
                <p>新品商品は3千円以上お買い上げで全国送料無料にて配送します。</p>
                <p>中古商品に関してはご利用ガイドをご確認ください。</p>
                <a href="#">▶︎ご利用ガイド</a>
            </div>
        </div>
        </div> 
        </>
        
    )
}
export default Guidance;