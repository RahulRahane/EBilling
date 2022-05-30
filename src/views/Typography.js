import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

function Typography() {

	const [state, setState] = useState({billId:"",paymentDate:"",paymentMode:"",userType:"",rrNumber:"",billAmount:"",paidAmount:"",excessPaid:"",status:"",userId:"",electricityboardId:""});
  const[id, setid] = useState([]);
  const head = {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true'
    };
    
    const url = "https://localhost:5001/"
    const getAllBillings = ((billid)=>{

      axios.get(`${url}Billing/${billid}`,{head})

      .then((response)=>{

        const userData = response.data;

        //console.warn(userData);
        if(userData.userType =="1")
        {
          document.getElementById("acctype").value ="Admin";
        }
        else if(userData.userType =="0"){
          document.getElementById("acctype").value ="Customer";
    
        }
        setState(userData);
      })
    });
    useEffect(()=>{
      const billid = JSON.parse(localStorage.getItem('id'));
      
      if (billid) {
        setid(billid);
        console.log(billid);
       }
      getAllBillings(billid);

    },[]);
    


  const [dropdownOpen, setDropdownOpen] = React.useState(false);  
  const [color, setColor] = React.useState("transparent");
  
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">BILLING</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Bill ID</label>
                        <Input
                          defaultValue="111"
                          placeholder="Bill ID"
                          disabled
                          type="text"
						              value={state.billId}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>User ID</label>
                        <Input
                          placeholder="User ID"
                          disabled
                          type="text"
						              value={state.userId}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Account Type</label>
                        
                        <Input
                      id="acctype"
                          placeholder="Account ID"
                          type="text"
                          disabled
						  //value={state.userType}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Payment Mode</label>
                        <Input
                          defaultValue="UPI"
                          placeholder="Payment Mode"
                          type="text"
                          disabled
						  value={state.paymentMode}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Payment Date</label>
                        <Input
                          type="date"
                          disabled
                          value={state.paymentDate}
                        />
                          
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>RR Number</label>
                        <Input
                          defaultValue="123"
                          placeholder="RR Number"
                          type="text"
                          disabled
						              value={state.rrNumber}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Bill Amount</label>
                        <Input
                          defaultValue="1000"
                          placeholder="Bill Amount"
                          type="text"
                          disabled
						  value={state.billAmount}
                        />
                      </FormGroup>
                    </Col>
                    
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Paid Amount</label>
                        <Input
                          defaultValue="1000"
                          placeholder="Paid Amount"
                          type="text"
                          disabled
						  value={state.paidAmount}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Excess Paid</label>
                        <Input
                          defaultValue="1000"
                          placeholder="Excess Paid"
                          type="text"
                          disabled
						  value={state.excessPaid}
                        />
                      </FormGroup>
                    </Col>
                    
                    <Col className="pl-1" md="5">
                      <FormGroup>
                        <label>Status</label>
                        <Input placeholder="status" 
                        type="boolean" 
                        disabled
                        value={state.status}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        href="http://localhost:3000/admin/Payment"
                      >
            Proceed To Payment
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
