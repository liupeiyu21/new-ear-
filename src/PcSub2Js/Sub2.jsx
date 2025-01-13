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
        </div>
        <Footer />
        <Lastinfo />
        </>
    )
}
export default MoreInformation;