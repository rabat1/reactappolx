import React from 'react';
import {BrowserRouter as Router,Route,} from 'react-router-dom';
import Cardselect from './Cardselect';
import footer from './footer';
import About from './About';
import Data from './data';
import Setup from './setup';
import Cart from './cart';


class AppRouter extends React.Component{
    render(){
        return(

<Router>
    <span>
    <Route exact path="/" component={Setup}/>
    <Route exact path="/data" component={Data}/>
    <Route exact path="/cart" component={Cart}/>
  
<Route path="/Cardselect" component={Cardselect}/>
</span>
<span>
<Route path="/footer" component={footer}/>
<Route path="/About" component={About}/>



</span>
</Router>


        )
    }
}
export default AppRouter;
