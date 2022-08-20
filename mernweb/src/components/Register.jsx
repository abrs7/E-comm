import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router";
const Register = () =>{

   const history = useHistory(); 
    
  const [user, setUser] = useState({
     username : "",
     email : "",
     password : ""
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});

    //HAndle Submit
    const handleSubmit = async (event)=>{
          event.preventDefault();
          
          const {username, email, password} = user;
          try{

           const res = await fetch('/register', {
            method : "POST",
            headers : {
             "Content-Type" : "application/json" 
            },
            body : JSON.stringify({
              username, email, password
            })
           })    
           if(res.status === 400 || !res){
            window.alert("Already Used Details")

           }else{
            window.alert("Registered Successfully");
            history.pushState('/login')
           }     
          } catch(error){
            console.log(error);
          }
        }
  }
    return(
      <section id="/register">
        <div>
         <div className="container shadow my-5">
        <div className="row justify-content-end">
            <div className="col-md-5 d-flex flex-column align-items-center text-blue justify-content-center form order-2">
                <h1 className="display-4 fw-bolder"> Welcome to GEBEYA</h1>
            <p className="lead text-center">Please add your detail to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/login" 
            className="btn btn-outline-dark rounded-pill pb-2 w-50">
              Login
              </NavLink>
            
            </div>
            <div className="col-md-6 p-5 ">
           <h1 className="display-6 fw-bolder mb-5 "> Register </h1>
           <form >
  <div class="mb-3">
    <label for="name" class="form-label">Username</label>
    <input type="text" 
    class="form-control"
     id="name" 
     name="username" 
    value={user.username}
    onChange={handleInput}
    />
  </div>
  <div class="mb-3">
    <label for="name" class="form-label">Email Address</label>
    <input type="email"
     class="form-control"
      id="name" 
     name="email" 
    value={user.email}
    onChange={handleInput}
      />
  </div>
  <div id="emailHelp" class="form-text">
    We'll never share your email with anyone else.
  </div>
  <div class="mb-3">
    <label for="name" class="form-label">Password</label>
    <input type="password"
     class="form-control"
      id="exampleInputPassword1"
     name="password" 
    value={user.password}
    onChange={handleInput}
      />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">
        I Agree with the Term and Conditons
        </label>
  </div>
  <NavLink to="/login"  className="btn btn-primary outline-primary w-100 mt-4 rounded-pill">   Login  </NavLink>
</form>
           </div>
        </div>
      </div>

        </div>
        </section>
    );

}

export default Register;