// import FastView from "../PcJs/FastView";
import Header from "../PcTopJs/Header";
import Footer from "../PcTopJs/Footer";
import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandsSearch"
import SecondHand from "./SecondHand/SecondHand"
// import Recentlycheck from "../PcTopJs/Recentlycheck"

// import Sub1 from '../Sub1.css'
import SpSearchForm from "../SPSub1/SpSearchForm"
import HamburgerMenu from "../SPTopJs/HamburgerMenu"
import SpBreadList from "../SPSub1/SpBreadList"
import SpSecondHand from "../SPSub1/SpSecondHand"
import Spfooter from "../SPTopJs/Spfooter"
import Lastinfo from "../PcTopJs/LastInfo"
import ScrollToTopButton from "../PcTopJs/TopReset"


function Sub1() {
    return(
        <>
        <Header />
        <HamburgerMenu />
        <SpBreadList />
        <SpSearchForm />
        <SpSecondHand />
        <Spfooter />
        <Lastinfo />
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
        <ScrollToTopButton />
        </>
    )

}

export default Sub1;