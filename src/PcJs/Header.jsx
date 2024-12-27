import Logo from "/Logo-img.png"


import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { TfiHeart } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import "../PcTop.css"

function Header() {
    return(
        <>
        <nav>
        <div className="pc-header">
            <p>世界中のイヤホン・ヘッドホンが試聴・買取・購入できる専門店</p>
            <div className="pc-category">
                <h1>
                    <img src={Logo} alt="サイトのlogoです。" />
                </h1>
                <ul className="pc-category-item">
                    <li>新品</li>
                    <li>中古</li>
                    <li>買取</li>
                    <li>修理・自作</li>
                    <li>カスタムIEM</li>
                    <li>店舗一覧</li>
                </ul>
                <div className="pc-icon-item">
                    {/* <CiSearch className="search" style={{color:"red", fontSize:"48px"}} /> */}
                    <CiSearch className="search-icon" />
                    <HiOutlineUser className="login-icon" />
                    <TfiHeart className="favorice-icon" />
                    <BsCart className="cart-icon" />
                </div>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Header;