// import FastView from "../PcJs/FastView";
import Header from "../PcTopJs/Header";
import Footer from "../PcTopJs/Footer";
import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandsSearch"
import SecondHand from "./SecondHand/SecondHand"
import Recentlycheck from "../PcTopJs/Recentlycheck"

// import Sub1 from '../Sub1.css'

function Sub1() {
    return(
        <>
        <Header />
        <div className="money">
            <BreadList />
            <div className="second-items">
                <div className="product-search">
                    <MoneyCategory />
                    <BrandsSearch />
                </div>
                <div className="second-product">
                    <SearchForm />
                    <SecondHand />
                    {/* <Recentlycheck /> */}
                </div>
            </div>
        </div>
        
        <Footer />
        </>
    )

}

export default Sub1;