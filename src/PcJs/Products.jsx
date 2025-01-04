import { useState } from "react"
import ProductsData from "../data/Products.json"
import ProductsIcon from "/pc-top-products-icon.png"


function Products(){

    const [ selectProduct, setSelectProduct] = useState("New");
    const productList = ProductsData.Products[selectProduct];

    const [ activeTab, setActive ] = useState("New");
    const active = ProductsData.Products[activeTab];

    return(
        <div className="container">
        <div className="container-more">
        <div className="heading">   
            <div className="container-icon">
                <img className="heading-icon" src={ProductsIcon} alt="キャラクター" />
            </div> 
            <h2
                className={selectProduct  ===  "New" ? "active" : ""}
                onClick={() => setSelectProduct("New")}  
            >
           
            新着アイテム</h2>
            <h2
                className={selectProduct === "Old" ? "active" : ""}
                onClick={() => setSelectProduct("Old")}
            >中古アイテム</h2>
            <h2
                className={selectProduct === "Ranking" ? "active" : ""}
                onClick={() => setSelectProduct("Ranking")}
                 onChange={(e) => setSelectProduct(e.target.value)}
            >ランキング</h2>
        </div>
        <p>もっと見る</p>
        </div>
        <div className="item-list">
        {productList.map((product, index) => (
            
                <div className="item-card" key={index}>
                    <img src={product.img} alt={1} />
                    <div className="item-info">
                        <p className="products-brand">{product.brand}</p>
                        <p className="products-name">{product.name}</p>
                        <p className={`products-status ${
                            product.status === "新着" ? "statusNew" :
                            product.status === "中古" ? "statusUsed" :
                            product.status === "ランキング" ? "" : "statusRanking" 
                        }`}>
                            
                        {product.status}</p>
                        <p className="products-price">¥{product.price.toLocaleString()}<span className="check-tax">税込</span></p>
                    </div>
                </div>
            
        ))
        }
        </div>
        {/* <div className="Linkbtn">
            <button className="linkbtn">すべて見る</button>
        </div> */}
</div>

    )
}

export default Products;