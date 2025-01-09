// import FastView from "../PcJs/FastView";
import Header from "../PcJs/Header";
import Footer from "../PcJs/Footer";
import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandsSearch"
import SecondHand from "./SecondHand/SecondHand"
import Recentlycheck from "../PcJs/Recentlycheck"
function Sub1() {
    return(
        <>
        <Header />
        <BreadList />
        <MoneyCategory />
        <SearchForm />
        <BrandsSearch />
        <SecondHand />
        <Recentlycheck />
        <Footer />
        </>
    )

}

export default Sub1;