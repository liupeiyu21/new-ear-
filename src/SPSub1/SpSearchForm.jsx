
import React, { useState } from "react"
import "../PcSub1.css"


function SpSearchForm() {
    const [ keyword, setKeyword ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ brand, setBrand ] = useState("");

    const handleReset = (e) => {
        setKeyword("");
        setCategory("");
        setBrand("");
    }

    return(
        <>
        <div className="sp-search-form">
            <h1 className="sp-form-name">買取検索</h1>
            <form className="sp-formContainer">
                
                <div className="sp-money-form">
                <div className="sp-inputGroup">
                    <label className="sp-form-title">キーワード：</label>
                    <input 
                    className="sp-input-keyword"
                    type="text" 
                    placeholder="キーワードを入力する"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div className="sp-inputGroup">
                    <label className="form-title2 ">カテゴリー：</label>
                    <select 
                    className="sp-select-keyword"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="wireless">ワイヤレス</option>
                        <option value="wiredear">有線イヤホン</option>
                        <option value="wierdhead">有線ヘッドホン</option>
                    </select>
                </div>

                <div className="sp-inputGroup">
                    <label className="sp-form-title sp-form-brand">ブランド：</label>
                    <select 
                    className="sp-brand-keyword"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="airpods">Airpods</option>
                        <option value="sony">SONY</option>
                        <option value="sennheiser">SENNHEISER</option>
                    </select>
                </div>

       
                <div className="sp-search-btn">
                <button 
                    onClick={handleReset}
                    className="sp-handleReset"
                    >
                    <small>条件をリセット</small>
                </button>
                <button  className="sp-submit">
                        検索
                </button>

                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default SpSearchForm;