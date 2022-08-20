import React from "react";
const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5 ">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">COntact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have <b> some</b> questions?</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col md-6">
                            <img src="/assets/contact.jpg" alt="contact" className="w-75" />

                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter Your name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                    <textarea class="form-control" id="exampleFormControlarea" rows="5"></textarea>
                                    <button type="submit" className="btn btn-outline-primary rounded-pill px-4 py-0">Send Your Feedback
                                        <i className="fa fa-paper-plane ms-2 w-100"></i></button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;