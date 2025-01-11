
import React, { useState } from "react";
import '../PcSub1.css'
import Addition from "/addition.png"
import Subtraction from "/subtraction.png"

const Category = ( { title, items }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleCategory = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleCategory} className="category-open">
                <h3>
                    {title}
                    <span className="isopen">
                        <img 
                        src={isOpen ? Subtraction : Addition} 
                        alt={isOpen ? "閉じる" : "開く"} 
                        className="icon"
                        />
                        
                    </span></h3> 
            </div>

            {isOpen && (
                <div className="money-category">
                    {items.map((item, index) => (
                        <div key={index} className="ca-item">
                            {item}
                        </div>
                    ))}
                </div>
            )
            }

        </>
    )
}

function MoneyCategory() {
    return(
        <>  
            <Category title="カテゴリーから探す" items={['ワイヤレス(100)','有線イヤホン(900)','有線ヘッドホン(100)','ゲーミング(200)','プレイヤー(233)','アンプ(333)','ケーブル(444)','スピーカー(323)','自作パーツ(123)','アクセサリ(324)']} />
        </>
    )
}

export default MoneyCategory;