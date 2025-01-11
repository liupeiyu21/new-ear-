import SecondCard from "./SecondCard";
 
const SecondList = ( { items} ) => {
    return(
        <div className="second-list">
            {items.map((item) => (
                <SecondCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default SecondList;