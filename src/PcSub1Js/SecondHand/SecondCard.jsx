import SubSecondHand from "/Sub1-products.png"


const SecondCard = ( { item} ) => {
    return(
        <div className="second-item">
            <img src={SubSecondHand} alt={item.name} />
            <div className="second-item-info">
                <p className="second-brand">{item.brand}</p>
                <p className="second-name">{item.name}</p>
                <p className="second-status">{item.status}</p>
                <p className="second-price">~¥{item.price}</p>
            </div>
        </div>
    )
}

export default SecondCard;