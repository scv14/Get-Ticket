import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Slider from './slider/slider';
import Filter from './filter/filter';
import Ticket from './ticket/ticket';
import Ours from './Ours/ours';
import ReturnCond from './returnConditions/returnConditions'
import {Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import "../components/style.css";
import createBrowserHistory from "history/createBrowserHistory"
import HowToBuy from './howToBuy/howToBuy'
const history = createBrowserHistory(); 

const Home = () => (
  <div>
    <Slider/>
    <Filter/>
    <Ticket/>
  </div>
)
const ReturnСonditions = () => (
  <div>
    <ReturnCond/>
  </div>
)
const Our = () => (
  <div>
    <Ours/>
  </div>
)
const Howtobuy = () => (
  <div>
    <HowToBuy/>
  </div>
)


class Kek extends React.Component {
 render(){
   return(
    <BrowserRouter history={history}>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/returnCond" component={ReturnСonditions}/>
        <Route path="/ours" component={Our}/>
        <Route path="/howtobuy" component={HowToBuy}/>
        <Footer/>
      </div>
    </BrowserRouter>
   )
 }
}
export default Kek;