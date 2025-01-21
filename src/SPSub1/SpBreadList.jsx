import "../PcSub1.css"

import SpSub1 from "/sp-sub2-search.png"
import Spsubsearch from "./Spsubsearch"
import { Link  } from 'react-router';

import { useState } from "react";

function SpBreadList() {


    const [isOpen, setIsOpen ] = useState(false);

    const toggleleft = () => {
        setIsOpen(true);
        // document.body.style.overflow = "hidden";
    
    }
    const closeleft = () => {
        setIsOpen(false);
        // document.body.style.overflow = "";
    }

    return(
        <>
        <ul className="breadlist sp-breadlist">
            <li className='sp-breadlist-top'>
             <Link to="/"className="sp-breadlist" >Top</Link>  
            </li>
            <li>&gt;</li>
            <li>買取金額を調べる</li>
        </ul>
        <img 
        className="sp-sub1-img"
        onClick={toggleleft}
        src={SpSub1} 
        alt="検索枠の写真" 

        />

        <div 
        className={`sp-sub1-brand-search ${isOpen ? 'move' : ""}`}
        >
            <div 
            className="sp-close-btn"
            onClick={closeleft}
            >
                <span></span>
                <span></span>
            </div>  
        <Spsubsearch />
        </div>
        </>
    )
}

export default SpBreadList;
