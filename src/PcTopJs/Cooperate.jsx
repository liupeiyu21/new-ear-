import React from "react";
import TopCooperate from "/top-cooperate.png"


function Cooperate() {
    return(
        <>
        <div className="cooper">
        <h2 className="cooperate-title">相互リンク</h2>
        <div className="cooperate-img">
            <img className="cooperate-img1" src={TopCooperate} alt="相互リンクの画像" />
            <img className="cooperate-img2" src={TopCooperate} alt="相互リンクの画像" />
        </div>
        </div>
        </>
    )
}
export default Cooperate;