import { useState } from "react";

import Up from '/Vector1.png'
import Down from '/Vector2.png'

const NoSellData = [
    {number:'01', title:'動作不良', description1:'・音が出ない、または片方だけしか音が出ない。',description2:'接触不良やノイズが発生する。',description3:'Bluetooth接続ができない（ワイヤレスイヤホンの場合）。'},
    {number:'02', title:'外観の大きなダメージ', description1:'・破損やひび割れがある。',description2:'・ケーブルが断線している（有線イヤホンの場合）。',description3:'汚れがひどく、清掃では落とせない状態。'},
    {number:'03', title:'偽造品や改造品', description1:'・ブランドの偽造品、コピー品は買取不可。',description2:'・内部構造や外観が改造されている場合も対象外となります。'},
    {number:'04', title:'動作不良', description1:'・生産終了から長い年月が経ち、市場価値がほとんどなくなったモデルは買取不可になることがあります。'},
    {number:'05', title:'動作不良', description1:'・日本国内で免税購入された商品は買取不可とさせていただきます。',description2:'・同一商品両点以下。'},  
];

function NoSell ({ number, title, description1, description2, description3}) {

    return(
        <>
        <div className="nosell-card">
            <h2 className="nosell-number">{number}</h2>
            <h3 className="nosell-title">{title}</h3>
            <div className="nosell-description">
                <p className="nosell-description1">{description1}</p>
                {description2 && <p className="nosell-description2">{description2}</p>}
                {description3 && <p className="nosell-description3">{description3}</p>}
            </div>
        </div>
        </>
    )
}

function NoPurchase () {
    const [ sellOpen, setStellOpen ] = useState(false);

    const toggleSell = () => {
        setStellOpen(!sellOpen);
    }
    return(
        <>
            <div >
                <h2 
                className="togglesell"
                onClick={toggleSell}
                >
                    買取不可の基準について
                     <span className="togglesells"><img src={sellOpen ? Down : Up} alt="toggle icon" /></span> 
                </h2>
            

        
            {sellOpen && (
               <div className="sell-grid">
                {NoSellData.map((nosell) => (
                    <NoSell
                    key={nosell.number}
                    number={nosell.number}
                    title={nosell.title}
                    description1={nosell.description1}
                    description2={nosell.description2}
                    description3={nosell.description3}
                    />
                ))}
               </div>
            )}
        </div>
        </>
    )

}

export default NoPurchase;