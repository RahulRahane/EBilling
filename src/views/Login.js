
import React, {useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginPage from "views/Login.css";


import axios from "axios";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Alert } from "reactstrap";


function Login() {
  const get_id = useRef(null);
  
  const[state,setState] = useState({userCredentials: {emailId:"",password:""}});
  const [isLoggedin, setIsLoggedin] = useState(false);
  const history = useHistory();
    const handleChange = (event) => {
      event.preventDefault();
    
      const userCredentialsCopy = state.userCredentials;
      Object.keys(userCredentialsCopy).forEach(key => {
        if (key === event.target.name){
          userCredentialsCopy[key] = event.target.value;
          //console.warn(" userCredentialsCopy[key]", userCredentialsCopy[key]);
        }
       console.warn("userCredentialsCopy",userCredentialsCopy)
        
    });
    setState({userCredentials: userCredentialsCopy});
    
    }
    const url = "https://localhost:5001/";
    
    const handleSubmit = event => {
      event.preventDefault();
      const head = { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type':'application/json'
         };

      //console.warn("data",data);
      axios.post(`${url}Users/Login`,{"emailId":state.userCredentials.emailId,"password":state.userCredentials.password})
        .then(res => {
          localStorage.setItem('token-info', JSON.stringify(res));
         
         /*if(res.data.status=='200'){
          setIsLoggedin(true);
          if(setIsLoggedin){
            alert('User logged in successfully');
          history.push("/user-page");
          console.log(res.data.userDetails)
        const get_id = res.data.userDetails.userId;
        //console.log(UserId);
        console.log(get_id);
        localStorage.setItem('id', get_id);
         
        }
        else{
          history.push("/Login");
        }
          
         }else
         alert('Email or Password is invalid')*/
         
         //document.getElementById('emailId').value='';
        // document.getElementById('password').value='';
        if(res.data.status=='200' && res.data.message=="AdminUser Login successfully"){
          alert('AdminUser logged in successfully');
          history.push("/admin/tables");
         }
         else if(res.data.status=='200' && res.data.message=="CustomerUser Login successfully"){
          alert('CustomerUser logged in successfully');
          history.push("/admin/user-page");
          const get_id = res.data.userDetails.userId;
          localStorage.setItem('id', get_id);
         }
         else{
         alert('Email or Password is invalid')
         document.getElementById('emailId').value='';

         document.getElementById('password').value='';
    }});
       
      }
      
 /*async function login()
  {
    console.warn(email,password)
    let item ={email,password};
    let result = await fetch("https://localhost:5001/Users/Login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)

    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    alert("Log in successful");
    history.push("/DashBoard")
  }*/

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
		          <CardHeader> <h6 className="text-info"/></CardHeader>
              <CardBody>
			  <div className="Login">
        <h2>Login</h2>
		
        <form className="form" id="loginform" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="emailId"  name="emailId" placeholder="Enter your email"  required="True" onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  placeholder="Enter your password" required="True" onChange={handleChange} />
          </div>
          <button className="primary" >Login</button><br/> <br/>
		  <p align="center"><a href="http://localhost:3000/admin/fpassword">Forget Password</a></p>
		 
		  <p align="center">Create Account: <a href="http://localhost:3000/admin/registration">Sign Up</a> </p>
         
        
        </form>
      </div>
                
       </CardBody>
            </Card>
			
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;

