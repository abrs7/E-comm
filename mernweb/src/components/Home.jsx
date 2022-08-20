import React from "react";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About"; 
import { NavLink } from "react-router-dom";
 
const Home = () =>{
    return(
        
        <div>
             <section id="home">          
            <div className="container ">
            
            <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
            
                <h1 className="display-4 fw-bolder mb-4 text-center text-black">All goods in one place.</h1>
                <p className="lead text-center fs-4 mb-5 text-gray">Everything you need to shop.</p>
                <div className="col-md-6">
                <img src="/assets/cart1.jpg"  alt="about page" className="w-158 mt-5 rounded-pill" /> 
            </div>
             <div className="buttons d-flex justify-content-center" >
             
                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Started</NavLink>
                <NavLink to="/service" className="btn btn-light me-4 rounded-pill px-4 py-2">Our Services</NavLink>

             </div>
         </div>
        </div>
        </div>
        </section>
        <About />
        <Services />
        <Contact />

        </div>

    );
}

export default Home;