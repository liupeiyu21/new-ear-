import Header from "./Header"
import FastView from "./FastView"
import Banner from './Banner'
import Recentlycheck from "./Recentlycheck"
import Products from './Products'
import HighPrice from './HighPrice'

import StaffReview2 from './StaffReview2'
import UsersReview from './UsersReview/UsersReview'
import Recommendation from './ Recommendation'
import ReadingItem from './ReadingItem'
import News from './News'
import Guidance from './Guidance'
import Cooperate from './Cooperate'
import Footer from './Footer'
import Lastinfo from './LastInfo'

function Top() {
    return(
        <>
      <Header />
      <FastView />
      <Banner />
      <Recentlycheck />
      <Products />
      <HighPrice />
      {/* <div className='all-review'> */}
        <StaffReview2 />
        <UsersReview />
      {/* </div> */}
      <ReadingItem />
      <Recommendation />
      <News />
     <Guidance />
     <Cooperate />
     <Footer />
     <Lastinfo />
        </>
    )
}

export default Top;