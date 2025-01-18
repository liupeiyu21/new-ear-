import { useState } from "react";


const brandData = [
    {
        id:"0",
        english:"Airpods",
        japan:"エアポッド"
    },
    {
        id:"1",
        english:"Technics",
        japan:"テクニクス"
    },
    {
        id:"2",
        english:"水月雨",
        japan:"MoonDrop"
    },
    {
        id:"3",
        english:"SONY",
        japan:"ソニー"
    },
    {
        id:"4",
        english:"SENNHEISER",
        japan:"ゼンハイザー"
    },
    {
        id:"5",
        english:"DENON",
        japan:"デノン"
    },
    {
        id:"6",
        english:"YAMAHA",
        japan:"ヤマハ"
    },
    {
        id:"7",
        english:"Jabra",
        japan:"ジャブラ"
    },
    {
        id:"8",
        english:"JVC",
        japan:"ジェイブイシー"
    },
    {
        id:"9",
        english:"ag",
        japan:"エージー"
    },
    {
        id:"10",
        english:"NUARL",
        japan:"ヌアール"
    },
    {
        id:"11",
        english:"Acoustune",
        japan:"アコースチューン"
    },
    {
        id:"12",
        english:"intime",
        japan:"アンティーム"
    }   
];

function BrandList ({english, japan }) {
    return(
        <>
        <h5>{english}</h5>
        <p>{japan}</p>
        </>
    )
}


function BrandsSearch() {

        const [ isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        }
        const closeMenu = () => {
            setIsOpen(false);
            document.body.style.overflow = "";
        }

    return(
        <>
        <div className="brand-search">
            <h3
            >
                ブランドから探す
            </h3>
            <h4
              onClick={toggleMenu}
              className="brand-h4"
            >
                ブランド一覧から探す&#9654;</h4>
            <h4>人気ブランドから探す</h4>
        </div>
        {brandData.map((ba) =>(
              <div 
              className='brand-search-list'
              key={ba.id}
              >
            <BrandList 
            english={ba.english}
            japan={ba.japan}
            />
              </div>
        ) )}
        <div 
        // className={`sub-brand-search ${}` }
        className={`sub-brand-search ${isOpen ? "active" : ""}`}
        >
             
              <div className="pc-sub1-brand">
                <h2>ブランド一覧から探す</h2>
                <div className="all-brand-letter">
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                    <span>E</span>
                    <span>F</span>
                    <span>G</span>
                    <span>H</span>
                    <span>I</span>
                    <span>J</span>
                    <span>K</span>
                    <span>L</span>
                    <span>M</span>
                    <span>N</span>
                    <span>O</span>
                    <span>P</span>
                    <span>Q</span>
                    <span>R</span>
                    <span>S</span>
                    <span>T</span>
                    <span>U</span>
                    <span>V</span>
                    <span>W</span>
                    <span>X</span>
                    <span>Y</span>
                    <span>Z</span>
                </div>

                <h3>A</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>AAW</h4>
                        <p>アドバンスド（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>AAW</h4>
                        <p>アドバンスド（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>AAW</h4>
                        <p>アドバンスド（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>AAW</h4>
                        <p>アドバンスド（0）</p>
                    </div>
                </div>

                <h3>B</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                </div>


                <h3>B</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                </div>


                <h3>B</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                </div>


                <h3>B</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                </div>



                <h3>B</h3>
                <div className="brand-letter">
                   
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                    <div className="brand-a">
                        <h4>Beats</h4>
                        <p>ビーツ（0）</p>
                    </div>
                </div>



             
                    <button 
                    className="close-button"
                    onClick={closeMenu}
                    >
                        <span></span>
                        <span></span>
                    </button>
              
            </div>
            <div className={`overlays ${isOpen ? "active" : "" }`}>

            </div>
        </div>
        </>
    )
}

export default BrandsSearch;