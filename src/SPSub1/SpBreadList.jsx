import "../PcSub1.css"

import { Link  } from 'react-router';
function SpBreadList() {
    return(
        <ul className="breadlist sp-breadlist">
            <li className='sp-breadlist-top'>
             <Link to="/"className="sp-breadlist" >Top</Link>  
            </li>
            <li>&gt;</li>
            <li>買取金額を調べる</li>
        </ul>
    )
}

export default SpBreadList;
