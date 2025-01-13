import SubEar from '/sub2-ear-big.png'
import SubEars from "/sub2-ear-small.png"

function InforProducts()  {
    return(
        <>
        <div className='ear-information'>
            <div className='ear-info-img'>
                <img src={SubEar} alt="イヤホンの写真" />
                <div className='ear-info-imgs'>
                    <img src={SubEars} alt="イヤホンの写真" />
                    <img src={SubEars} alt="イヤホンの写真" />
                    <img src={SubEars} alt="イヤホンの写真" />
                </div>
            </div>

            <div className='ear-info'>
                <h3>AirPods Pro MWP22J/A</h3>
                <p className='info-best-price'>最高買取金額</p>
                <p className='infor-price'>￥17,000<span>円</span></p>
                <p className='infor-small'><small>実際の商品状態により買取価格が変動する場合がございます。</small></p>
                <button>買取申し込み</button>
            </div>
        </div> 
        </>
    )
}
export default InforProducts