import Logo from "/Logo-img.png"
import Old from "/pc-top-category-old.png"


import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { TfiHeart } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";
import { TbMessageReportFilled } from "react-icons/tb";
import "../PcTop.css"
import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const[ isOpen, setIsOpen] = useState(false);
 
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


    return(
        <>
        <div className="a" >
          
        <div className="pc-infor" id="top1">
               <TbMessageReportFilled className="infor-icon" />
               <p >重要なお知らせ：</p>
               <p className="pc-infor-p2">e☆イヤホン年末年始の営業に関しまして</p>
        </div>
        <nav>
        <div className="pc-header" >
            <p>世界中のイヤホン・ヘッドホンが試聴・買取・購入できる専門店</p>
            <div className="pc-category">
                <h1 id="top1">
                   <Link to= "/"><img src={Logo} className="sp-logo" alt="サイトのlogoです。" /></Link> 
                </h1>
               
                <ul className="pc-category-item">
                    <li className="li">
                        新品
                    <ul className="pc-category-old">
                      <li className="old old-wireles">
                        ワイヤレス
                       
                        <div className="pc-catagory-old-wireless">
                            <h2>ワイヤレス</h2>
                          <div className="pc-catagory-old-wireless1 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>完全ワイヤレスイヤホン</p>
                          </div>
                          <div className="pc-catagory-old-wireless2 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>左右一体型ワイヤレスイヤホン</p>
                          </div>
                          <div className="pc-catagory-old-wireless3 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>Bluetoothレシーバー</p>
                          </div>
                          <div className="pc-catagory-old-wireless4 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>Bluetoothトランスミッター</p>
                          </div>
                          <div className="pc-catagory-old-wireless5 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>ワイヤレスヘッドホン</p>
                          </div>
                          <div className="pc-catagory-old-wireless6 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>Bluetoothケーブル</p>
                          </div>
                          <div className="pc-catagory-old-wireless7 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>通話用ヘッドセット</p>
                          </div>
                          <div className="pc-catagory-old-wireless8 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>骨伝導型</p>
                            </div>
                    
                        </div>
                  
                        {/* <ul className="pc-catagory-old-wireless">
                          <li>完全ワイヤレスイヤホン</li>
                          <li>左右一体型ワイヤレスイヤホン</li>
                          <li>Bluetoothレシーバー</li>
                          <li>Bluetoothトランスミッター</li>
                          <li>ワイヤレスヘッドホン</li>
                          <li>Bluetoothケーブル</li>
                          <li>通話用ヘッドセット</li>
                          <li>骨伝導型</li>
                        </ul> */}
                      </li>
                      <li className="old old-wired">
                        有線イヤホン
                        <div className="pc-catagory-old-wireless w">
                            <h2>有線イヤホン</h2>
                          <div className="pc-catagory-old-wireless1 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>カナル型</p>
                          </div>
                          <div className="pc-catagory-old-wireless2 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>インナーイヤー型</p>
                          </div>
                          <div className="pc-catagory-old-wireless3 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>イヤーハンガー</p>
                          </div>
                          <div className="pc-catagory-old-wireless4 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>モニターイヤホン</p>
                          </div>
                          <div className="pc-catagory-old-wireless5 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>骨伝導型</p>
                          </div>
                          <div className="pc-catagory-old-wireless6 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>マイク付き</p>
                          </div>
                          <div className="pc-catagory-old-wireless7 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>オーダーメイドイヤホン</p>
                          </div>
                          <div className="pc-catagory-old-wireless8 q">
                            <img src={Old} alt="イヤホンの写真" />
                            <p>耳をふさがない有線イヤホン</p>
                            </div>
                    
                        </div>
                  
                      </li>
                      <li className="old">有線ヘッドホン</li>
                      <li className="old">ゲーミング</li>
                      <li className="old">プレイヤー</li>
                      <li className="old">AMP・DAC</li>
                      <li className="old">ケーブル</li>
                      <li className="old">スピーカ</li>
                      <li className="old">アクセサリ</li>
                    </ul>
                    </li>
                    <li className="li">
                        中古
                    
                      <ul className="pc-category-old">
                      
                        <li>中古ワイヤレス</li>
                        <li>中古ヘッドホン</li>
                        <li>中古アンプ</li>
                        <li>中古スピーカー</li>
                        <li>中古イヤホン</li>
                        <li>中古プレイヤー</li>
                        <li>中古ケーブル</li>
                        <li>中古アクセサリ</li>
                      </ul>
                 
                
                    </li>
                    <li className="li">
                        買取
                    <ul className="pc-category-old">
                      <li className="pc-categpry-old-li">
                        <Link to= "/買取金額を調べる">買取金額を調べる</Link>
                        </li>
                      <li>eイヤホンの買取サービス</li>
                      <li>無料査定のお申し込み</li>
                      <li>買取Q＆A</li>
                    </ul>
                    </li>
                    <li className="li">
                        修理・自作
                    <ul className="pc-category-old">
                      
                      <li>eイヤホンクリニック</li>
                      <li>線材</li>
                      <li>プラグ</li>
                      <li>ジャック</li>
                      <li>コネクタ</li>
                      <li>収縮チューブ/絶縁キャップ</li>
                      <li>はんだ</li>
                      <li>自作キット</li>
                      <li>ケーブルテスター</li>
                      <li>MDR-CD900ST/M1ST用パーツ</li>
                      <li>純正交換パーツ</li>
                    </ul>
                    </li>
                    <li className="li">
                         カスタムIEM
                    <ul className="pc-category-old">
                      <li>カスタムIEMとは</li>
                      <li>ブランド一覧</li>
                    </ul>
                    </li>
                    <li className="li">店舗一覧</li>
                </ul>
                <div className="pc-icon-item">
                    {/* <CiSearch className="search" style={{color:"red", fontSize:"48px"}} /> */}
                    <CiSearch 
                    className="search-icon"
                    onClick={openModal}
                    />
                    <HiOutlineUser className="login-icon" />
                    <TfiHeart className="favorice-icon" />
                    <BsCart className="cart-icon" />
                </div>
            </div>
        </div>
        <ul className="pc-category-item2">
                    <li className="li">新品</li>
                    <li className="li">
                        中古
                        <ul className="pc-category-old2">
                      
                        <li>中古ワイヤレス</li>
                        <li>中古ヘッドホン</li>
                        <li>中古アンプ</li>
                        <li>中古スピーカー</li>
                        <li>中古イヤホン</li>
                        <li>中古プレイヤー</li>
                        <li>中古ケーブル</li>
                        <li>中古アクセサリ</li>
                      </ul>
                    </li>
                    <li className="li">
                        買取
                    <ul className="pc-category-old2">
                      <li>買取金額を調べる</li>
                      <li>eイヤホンの買取サービス</li>
                      <li>無料査定のお申し込み</li>
                      <li>買取Q＆A</li>
                    </ul>
                    </li>
                    <li className="li">修理・自作</li>
                    <li className="li">カスタムIEM</li>
                    <li className="li">店舗一覧</li>
                </ul>
        </nav>
        </div>




        {isOpen && (
          
          <div className="modal-overlay" onClick={closeModal}>
              <form action="" 
              className="form-search-icon"
              onClick={(e) => e.stopPropagation()}
              >
                <select name="" id="" className="form-select">
                  <option value="">すべて</option>
                  <option value="">新品</option>
                  <option value="">買取</option>
                </select>
      
                <input 
                type="text" 
                placeholder="キーワード探す"
                className="form-input"
                />
              </form>
    
      </div>
        )}
       
        </>
    )
}

export default Header;