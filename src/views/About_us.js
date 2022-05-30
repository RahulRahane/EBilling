
import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function About_us() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader> <h6 className="text-info">
                 Electricity Billing E-services
				 </h6></CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}>
				 <p>
				 Enjoy this service at your own convience!
				
				 <ul>
				 <li>Pay your electricity bill online.</li>
				 <li>View detailed information about your account.</li>
				 <li>View your latest and past billing information.</li>
				 <li>Track your monthly electricity consumption.</li>
				 </ul>
				 
				 Currently, we offer payment service via Debit/Credit Card. However, we are engaing with other payment services for your convience.
				
				</p>
				<p>
				 
				 To Sign Up please click on "Register Now" on Navigation bar at top right corner and follow the instructions. You will be asked to key-in an account number and your preffered password.
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

export default About_us;
