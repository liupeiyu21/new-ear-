
import React, { useState } from "react"
import "../PcSub1.css"


function SearchForm() {
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
            <h1 className="form-name">買取検索</h1>
            <form className="formContainer">
                
                <div className="money-form">
                <div className="inputGroup">
                    <label className="form-title">キーワード：</label>
                    <input 
                    className="input-keyword"
                    type="text" 
                    placeholder="キーワードを入力する"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div className="inputGroup">
                    <label className="form-title2 ">カテゴリー：</label>
                    <select 
                    className="select-keyword"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="wireless">ワイヤレス</option>
                        <option value="wiredear">有線イヤホン</option>
                        <option value="wierdhead">有線ヘッドホン</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <label className="form-title form-brand">ブランド：</label>
                    <select 
                    className="brand-keyword"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="airpods">Airpods</option>
                        <option value="sony">SONY</option>
                        <option value="sennheiser">SENNHEISER</option>
                    </select>
                </div>

       
                <div className="search-btn">
                <button 
                    onClick={handleReset}
                    className="handleReset"
                    >
                    <small>条件をリセット</small>
                </button>
                <button  className="submit">
                        検索
                </button>

                </div>
            </div>
            </form>
        </>
    )
}

export default SearchForm;