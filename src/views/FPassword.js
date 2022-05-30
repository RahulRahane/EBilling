import React from "react";

import loginPage from "views/Login.css";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function FPassword() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
			<CardHeader> <h6 className="text-info">
			 
			
				 </h6></CardHeader>
              <CardBody>
              
			  <div className="FPassword">
        <h2>Forget Password</h2>
		
        <form className="form">
		<div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" required="True"/>
          </div>
          
          <button className="primary">Send Email</button><br/> <br/>
		  
         
        
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

export default FPassword;

