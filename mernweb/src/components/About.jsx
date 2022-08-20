import React from "react";

const About = () =>{
    return(
        <div>
      <section id = "about">
        <div className="container my-5 py-5">
           <div className="row">
            <div className="col-md-6">
                <img src="/assets/about.jpg"  alt="about page" className="w-75 mt-5" /> 
            </div>
            <div className="col-md-6">
            <h3 className="fs-5 mb-0">About Us</h3>
             <h1 className="dispaly-6 mb-2">Who <b>We </b>Are</h1> 
             <hr className="w-50" />
             <p className="lead mb-4">Gebeya is established by 3 young Enterpreneurs while they are trying to submit a reserarch for their acadamic learning.It was not thought that their's project will grow in to this huge site where a variety of goods are sold.</p>
            <button className="btn btn-priamry rounded-pill px-4 py-2">Get Started</button>
            <button className="btn btn-priamry rounded-pill px-4 py-2">Contact Us</button>
            </div> 
        </div>
        </div>
        </section>

        </div>
    );
}

export default About;