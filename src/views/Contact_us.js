/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function Contact_us() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader> <h6 className="text-info">
			  <h2>Need Help ?</h2>
                 <h6>Contact Details</h6>
			
				 </h6></CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}>
				 <p>
				<b> Email</b>: electricity.bill@gamil.com			 
				</p>
				<p>
				<b>Mobile No.</b>: 9876543210
				</p>
				<p>
				<b>Address </b>: Unnamed Road, Block A, Indrapuri Colony, Lal Bagh Colony, Ghaziabad, Uttar Pradesh 201102, India
				
				 </p>
				 <p> <a href="http://localhost:3000/admin/dashboard">Visit Website</a>
				 </p>
				 
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact_us;
