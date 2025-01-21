import { useState } from 'react';
import '../SPTop.css'
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router';
import { TfiHeart } from "react-icons/tfi";

import Tokyo from "/tokyo-1.png"
import SpBlog from "/sp-blog.png"
import SpX from "/sp-x.png"
import SpYu from "/sp-yu.png"
import SpIns from "/sp-ins.png"

function HamburgerMenu(){
    const [ isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // }
    const toggleMenu = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }
    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    }
    // const openModal = () => setIsOpen(true);
    // const closeModal = () => setIsOpen(false);
  


    return(
        <>
        <div className="hamburger-menu">
            <div 
            className={`overlay ${isOpen ? 'active' : ''}`}
            id="overlay"
            onClick={closeMenu}
            ></div>
            <div className={`hamburger-line ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line1 line"></div>
                <div className="line2 line"></div>
                <div className="line3 line"></div>
            </div>
            <BsCart className='sp-cart' />
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className="menu-btn">
                        <button className="menu-btn1">ログイン</button>
                        <button className="menu-btn2">新規会員登録</button>
                    </div>
                    <div className="menu-love">
                        <h3>お気に入りアイテム</h3>
                        
                    </div>
                    <div className='tfheart'>
                    <TfiHeart className='hamburger-fas' />
                    </div>
                    <h3 className="sp-hamburger-cago">カテゴリから探す</h3>

                    <div className="cp_menu">
                        <label htmlFor="cp_menu_bar1">新品</label>
                        <input type="radio" name="radio" id="cp_menu_bar1" className="accordion" />
                        <ul id="link1">
                        <li><a href="">link01</a></li>
                        <li><a href="">link02</a></li>
                        <li><a href="">link03</a></li>
                        <li><a href="">link04</a></li>
                        <li><a href="">link01</a></li>
                        <li><a href="">link02</a></li>
                        <li><a href="">link03</a></li>
                        <li><a href="">link04</a></li>
                        </ul>
                       
                        <label htmlFor="cp_menu_bar2">中古</label>
                        <input type="radio" name="radio" id="cp_menu_bar2" className="accordion" />
                        <ul id="link2">
                            <li><a href="">link01</a></li>
                            <li><a href="">link02</a></li>
                            <li><a href="">link03</a></li>
                            <li><a href="">link04</a></li>
                        </ul>

                        <label htmlFor="cp_menu_bar3">買取</label>
                        <input type="radio" name="radio" id="cp_menu_bar3" className="accordion" />
                        <ul id="link3">
                            <li><Link to= "/買取金額を調べる">買取金額を調べる</Link></li>
                            <li><a href="">eイヤホンの買取サービス</a></li>
                            <li><a href="">無料査定のお申し込み</a></li>
                            <li><a href="">買取Q＆A</a></li>
                        </ul>

                        <label htmlFor="cp_menu_bar4">修理・自作</label>
                        <input type="radio" name="radio" id="cp_menu_bar4" className="accordion" />
                        <ul id="link4">
                            <li><a href="">link01</a></li>
                            <li><a href="">link02</a></li>
                            <li><a href="">link03</a></li>
                            <li><a href="">link04</a></li>
                        </ul>

                        <label htmlFor="cp_menu_bar5">カスタムIEM</label>
                        <input type="radio" name="radio" id="cp_menu_bar5" className="accordion" />
                        <ul id="link5">
                            <li><a href="">link01</a></li>
                            <li><a href="">link02</a></li>
                        </ul>
                    </div>
                    <div className='sp-shop'>
                        <h3>店舗</h3>
                        <h4>東京都</h4>
                        <div className='sp-shop-infors'>
                            <img src={Tokyo} alt="実店舗の写真" />
                            <div className='sp-shop-infor'>
                                <p>秋葉原店　本館</p>
                                <p>営業時間　11:00-20:00</p>
                            </div>
                        </div>
                        <div className='sp-shop-infors sp-2'>
                            <img src={Tokyo} alt="実店舗の写真" />
                            <div className='sp-shop-infor'>
                                <p>秋葉原店　本館</p>
                                <p>営業時間　11:00-20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='sp-shop sp-2'>
                        <h4>大阪府</h4>
                        <div className='sp-shop-infors'>
                            <img src={Tokyo} alt="実店舗の写真" />
                            <div className='sp-shop-infor'>
                                <p>秋葉原店　本館</p>
                                <p>営業時間　11:00-20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='sp-shop sp-2'>
                        <h4>愛知県</h4>
                        <div className='sp-shop-infors'>
                            <img src={Tokyo} alt="実店舗の写真" />
                            <div className='sp-shop-infor'>
                                <p>秋葉原店　本館</p>
                                <p>営業時間　11:00-20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='sp-shop sp-2'>
                        <h4>宮城県</h4>
                        <div className='sp-shop-infors'>
                            <img src={Tokyo} alt="実店舗の写真" />
                            <div className='sp-shop-infor'>
                                <p>秋葉原店　本館</p>
                                <p>営業時間　11:00-20:00</p>
                            </div>
                        </div>
                    </div>
                    <h3>ご利用ガイド</h3>
                    <h3>お問い合わせ</h3>
                    <div>
                        <h3>SNSアイテム</h3>
                        <div className='sns'>
                            <img src={SpBlog} alt="blog" />
                            <img src={SpYu} alt="youtube" />
                            <img src={SpX} alt="X" />
                            <img src={SpIns} alt="ins" />
                        </div>
                    </div>
                   
                  
                </div>
                
        </div>
        {/* { isMenu && (
        {huamburgerMenuList.map((Humburger) => (
            <Humburger 
                item1={Humburger.item1}
                item2={Humburger.item2}
                item3={Humburger.item3}
                item4={Humburger.item4}
                item5={Humburger.item5}
                item6={Humburger.item6}
                item7={Humburger.item7}
                item8={Humburger.item8}
                item9={Humburger.item9}
            />
        ))}
    )
    } */}


        
        </>
    )
}

export default HamburgerMenu;