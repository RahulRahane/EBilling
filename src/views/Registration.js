import React from "react";
import { useState } from "react";
import loginPage from "views/Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function Registration() {
  const [state, setState] = useState({userInfo:{firstName:"",lastName:"",mobileNumber:"",email:"",address:"",city:"",state:"",pinCode:"",password:"",confirmPassword:""}});
  const [issignin, setIssignin] = useState(false);
  const history = useHistory();
  const handleChange=((event)=>{
    event.preventDefault();
    const userInfoCopy = state.userInfo;
    Object.keys(userInfoCopy).forEach(key => {
      if (key === event.target.name){
        userInfoCopy[key] = event.target.value;
      }  
    });
    setState({userInfo: userInfoCopy});
    });
    const handleSubmit = event => {
      event.preventDefault();
      const head = { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type':'application/json'
        };
        const url = "https://localhost:5001/"
      axios.post(`${url}Users/AddUser`,
      {
      "firstName": state.userInfo.firstName,
      "lastName": state.userInfo.lastName,
      "contactNo": state.userInfo.mobileNumber,
      "city": state.userInfo.address,
      "emailId": state.userInfo.email,
      "city":state.userInfo.city,
      "state":state.userInfo.state,
      "pinCode":state.userInfo.pinCode,
      "password": state.userInfo.password,
      "confirmPassword": state.userInfo.confirmPassword})
        .then(res => {
          setIssignin(true);
          if(setIssignin){
            alert('User Registered successfully');
          history.push("/dashboard");
          }
        });
        
      }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
              
			  <div className="Registration">
        <h2>Registration</h2>
		
        <form className="form"  onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" required="True" onChange={handleChange}/>
          </div>
		   <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={handleChange}/>
          </div>
		   <div className="input-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="number" name="mobileNumber" maxLength="10" required="True" onChange={handleChange}/>
          </div>
		   <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required="True" onChange={handleChange}/>
          </div>
		  <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input type="text" name="state" onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="pinCode">Zip Code</label>
            <input type="number" name="pinCode" onChange={handleChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required="True" onChange={handleChange}/>
          </div>
		  <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" required="True" onChange={handleChange}/>
          </div>
  
         <button className="primary">Registration</button><br/> <br/>
		  
        
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

export default Registration;

