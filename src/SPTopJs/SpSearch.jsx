import '../SPTop.css'

function SpSearch() {
    return(
        <>
            <form action="" className='sp-form'>
                <div className="sp-search">
                    <select name="" id="">
                        <option value="">新品</option>
                        <option value="">中古</option>
                        <option value="">買取</option>
                        <option value="">全て</option>
                    </select>
                </div>
                <div className="sp-input">
                    <input 
                    type="text"
                    placeholder="新品" 
                     />
                </div>
            </form>
            <div className='sp-store'>
                <p>お店で試聴しよう</p>
                <p>e☆イヤホン店舗一覧&#9660;</p>
            </div>
            
        </>
    )
}
export default SpSearch;