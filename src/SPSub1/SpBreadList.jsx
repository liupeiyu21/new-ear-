import "../PcSub1.css"
import SpSub1 from "/sp-sub2-search.png"

import { Link  } from 'react-router';
function SpBreadList() {
    return(
        <>
        <ul className="breadlist sp-breadlist">
            <li className='sp-breadlist-top'>
             <Link to="/"className="sp-breadlist" >Top</Link>  
            </li>
            <li>&gt;</li>
            <li>買取金額を調べる</li>
        </ul>
        <img className="sp-sub1-img" src={SpSub1} alt="検索枠の写真" />
        </>
    )
}

export default SpBreadList;
