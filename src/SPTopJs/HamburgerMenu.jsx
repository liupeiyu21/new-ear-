import { useState } from 'react';
import '../SPTop.css'
import { BsCart } from "react-icons/bs";

function HamburgerMenu(){
    const [ isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
        <div className="hamburger-menu">
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
                        {/* <img src={FavoriteIcon} alt="気に入りのアイコン" /> */}
                    </div>
                    <h3 className="sp-hamburger-cago">カテゴリから探す</h3>
                    <h3>新品</h3>
                </div>
        </div>

        
        </>
    )
}

export default HamburgerMenu;