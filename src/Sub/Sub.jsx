// import FastView from "../PcJs/FastView";
import Header from "../PcJs/Header";
import Footer from "../PcJs/Footer";
import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandsSearch"

function Sub() {
    return(
        <>
        <Header />
        <BreadList />
        <MoneyCategory />
        <SearchForm />
        <BrandsSearch />
        <Footer />
        </>
    )

}

export default Sub;