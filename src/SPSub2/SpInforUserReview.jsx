import Sun from '/sub2-users-review.png'

const users = [
    {id:'0',  name:'よーねこ', age:'年代：40代 / 男性', time:'2024.11.26', description:"早い、専門性が高い、おすすめです。"},
    {id:'1',  name:'よーねこ', age:'年代：40代 / 男性', time:'2024.11.26', description:"早い、専門性が高い、おすすめです。"},
    {id:'2',  name:'よーねこ', age:'年代：40代 / 男性', time:'2024.11.26', description:"早い、専門性が高い、おすすめです。"}
];

function UserRe ({img,name,age,time,description}) {
    return(
        <>
        <div className="sp-users-re">
            <div className='sp-img-info'>
                <div className='picture-sun'>
                    <img src={Sun} alt="ユーザーのアカウントのアイコンです。" />
                </div>
                <div className=" user-age"> 
                    <p className="users-name">{name}</p>
                    <p className="users-age">{age}</p>
                    <p className="users-time"><small>{time}</small></p>
                </div>
            </div>
            <p className="users-description">{description}</p>
        </div>
        </>
    )
}

function SpInforUserReview() {
    return(
        <>
        <div className="sp-users-infor-review">
            <h2>ユーザーレビュー</h2>
            <div>
                {users.map(( user) => (
                    <UserRe
                    key={user.id}
                    
                    name={user.name}
                    age={user.age}
                    time={user.time}
                    description={user.description}
                    />
                ))}
            </div>
        </div>
        
        </>
    )
}

export default SpInforUserReview;