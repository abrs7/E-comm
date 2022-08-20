import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Route,Switch} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
function App () {
    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path="navbar" component={Navbar} />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />

   
     
           </Switch>
             <Footer />
        </>
    );
}

export default App;