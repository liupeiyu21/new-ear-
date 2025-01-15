import Header from "../PcTopJs/Header";
import InforBreadList from "./InforBreadList";
import InforProducts from "./InforProducts";
import PurchaseRules from "./PurchaseRules";
import NoPurchase from "./NoPurchase";
import InforUserReview from "./InforUserReview";

import '../PcSub2.css'
import Footer from "../PcTopJs/Footer";
import Lastinfo from "../PcTopJs/LastInfo"
import HamburgerMenu from "../SPTopJs/HamburgerMenu"
import SpInforUserReview from "../SPSub2/SpInforUserReview"
import Spfooter from "../SPTopJs/Spfooter"
import ScrollToTopButton from "../PcTopJs/TopReset"

function MoreInformation () {
    return(
        <>
        <Header />
        <HamburgerMenu />
        <InforBreadList />
        <div className="more">
            <InforProducts />
            <PurchaseRules />
            
            <NoPurchase />
            <InforUserReview />
            <SpInforUserReview />
        </div>
        <Footer />
        <Spfooter />
        <Lastinfo />
        <ScrollToTopButton />
        </>
    )
}
export default MoreInformation;