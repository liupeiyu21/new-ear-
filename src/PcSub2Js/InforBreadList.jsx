import { Link } from 'react-router';

function InforBreadList () {
    return(
        <>
            <ul className="inforbreadlist">
                <li><Link className='inforbreadlist' to="/">Top</Link></li>
                <li>&gt;</li>
                <li><Link className='inforbreadlist' to="/買取金額を調べる">買取金額を調べる</Link></li>
                <li>&gt;</li>
                <li>イヤホンの名前</li>
            </ul>
        </>
    )
}

export default InforBreadList;