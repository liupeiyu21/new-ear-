
import './App.css'
// import Header from "./PcJs/Header"
// import FastView from "./PcJs/FastView"
// import Banner from './PcJs/Banner'
// import Recentlycheck from "./PcJs/Recentlycheck"
// import Products from './PcJs/Products'
// import HighPrice from './PcJs/HighPrice'

// import StaffReview2 from './PcJs/StaffReview2'
// import UsersReview from './PcJs/UsersReview/UsersReview'
// import Recommendation from './PcJs/ Recommendation'
// import ReadingItem from './PcJs/ReadingItem'
// import News from './PcJs/News'
// import Guidance from './PcJs/Guidance'
// import Cooperate from './PcJs/Cooperate'
// import Footer from './PcJs/Footer'
// import Lastinfo from './PcJs/LastInfo'

import Top from "./PcJs/Top"
import Sub from "./Sub/Sub"


import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {


  return (
    <>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path='/買取金額を調べる' element={<Sub />} />
    </Routes>
    
  </BrowserRouter>
      {/* <Header />
      <FastView />
      <Banner />
      <Recentlycheck />
      <Products />
      <HighPrice />
      <StaffReview2 />
      <UsersReview />
      <ReadingItem />
      <Recommendation />
      <News />
     <Guidance />
     <Cooperate />
     <Footer />
     <Lastinfo /> */}
    </>
  )
}

export default App
