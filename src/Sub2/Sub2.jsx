import Header from "../PcJs/Header";
import InforBreadList from "./InforBreadList";
import InforProducts from "./InforProducts";
import PurchaseRules from "./PurchaseRules";
// import NoPurchase from "./NoPurchase";
// import InforUserReview from "./InforUserReview";
// import Footer from "../../comment/Footer"


function MoreInformation () {
    return(
        <>
        <Header />
        <InforBreadList />
        {/* <div className="more"> */}
            <InforProducts />
            <PurchaseRules />
            
            {/* <NoPurchase /> */}
            {/* <InforUserReview /> */}
        {/* </div> */}
        {/* <Footer /> */}
        </>
    )
}
export default MoreInformation;