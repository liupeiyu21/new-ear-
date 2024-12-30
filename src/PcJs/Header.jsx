import Logo from "/Logo-img.png"


import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { TfiHeart } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { TbMessageReportFilled } from "react-icons/tb";
import "../PcTop.css"

function Header() {
    return(
        <>
        <div className="pc-infor">
               <TbMessageReportFilled className="infor-icon" />
               <p>重要なお知らせ：</p>
               <p className="pc-infor-p2">e☆イヤホン年末年始の営業に関しまして</p>
        </div>
        <nav>
        <div className="pc-header">
            <p>世界中のイヤホン・ヘッドホンが試聴・買取・購入できる専門店</p>
            <div className="pc-category">
                <h1>
                    <img src={Logo} alt="サイトのlogoです。" />
                </h1>
               
                <ul className="pc-category-item">
                    <li className="li">新品</li>
                    <li className="li">中古</li>
                    <li className="li">買取</li>
                    <li className="li">修理・自作</li>
                    <li className="li"> カスタムIEM</li>
                    <li className="li">店舗一覧</li>
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
        <ul className="pc-category-item2">
                    <li className="li">新品</li>
                    <li className="li">中古</li>
                    <li className="li">買取</li>
                    <li className="li">修理・自作</li>
                    <li className="li">カスタムIEM</li>
                    <li className="li">店舗一覧</li>
                </ul>
        </nav>
        </>
    )
}

export default Header;