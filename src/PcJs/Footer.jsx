
import footerLogo from '/footer-logo.png'
import blogIcon from '/footer-blogicon.png'
import ytIcon from '/footer-yticon.png'
import xIcon from '/footer-xicon.png'
import insIcon from '/footer-insIcon.png'





function Footer(){

    return(
        <>
            <footer>
            
                <div className="address">
                    <h3>店舗案内</h3>
                    <ul>
                        <li><a href="#">WEB本店</a></li>
                        <li><a href="#">秋葉原店　本館</a></li>
                        <li><a href="#">ゲーミング　AKIBA</a></li>
                        <li><a href="#">大阪日本橋本店</a></li>
                        <li><a href="#">名古屋大須店</a></li>
                        <li><a href="#">仙台駅前店</a></li>
                    </ul>  
                </div>
                <div className="service">
                    <h3>サービス</h3>
                    <ul>
                        <li><a href="#">買取サービス</a></li>
                        <li><a href="#">カスタマイズ修理</a></li>
                        <li><a href="#">メーカー修理受付</a></li>
                        <li><a href="#">カスタムIEM</a></li>
                        <li><a href="#">ラッピングサービス</a></li>
                    </ul>  
                </div>
                <div className="service">
                    <h3>Info</h3>
                    <ul>
                        <li><a href="#">ご利用ガイド</a></li>
                        <li><a href="#">アルバイト大募集</a></li>
                        <li><a href="#">会員登録・修正</a></li>
                        <li><a href="#">会員ポイント確認</a></li>
                        <li><a href="#">注文履歴確認</a></li>
                    </ul>  
                </div>
                <div className='footerLogo'>
                    <img src={footerLogo} alt="フッターのサイトのロゴです" />
                    <div className='snslogo'>
                        <img src={blogIcon} alt="ブロックのアイコン" />
                        <img src={ytIcon} alt="ユーチューブのアイコン" />
                        <img src={xIcon} alt="Xのアイコン" />
                        <img src={insIcon} alt="insのアイコンです" />
                    </div>
                </div>
              

                

            </footer>    
        </>
    )
}

export default Footer;