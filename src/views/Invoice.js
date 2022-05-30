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

function Invoice() {
	const [state, setState] = useState({invoiceId:"",readingDate:"",consumptionUnit:"",netAmount:"",
  dueDate:"",status:"",billId:"",userId:""});
  const[id, setid] = useState([]);
    const head = {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true'
    };
    
    const url = "https://localhost:5001/"
    const getAllInvoices = ((invoiceid)=>{

      axios.get(`${url}Invoice/${invoiceid}`,{head})

      .then((response)=>{

        const userData = response.data;

        //console.warn(userData);

        setState(userData);
      })
    });
    useEffect(()=>{
      const invoiceid = JSON.parse(localStorage.getItem('id'));
      
      if (invoiceid) {
        setid(invoiceid);
        console.log(invoiceid);
       }
      getAllInvoices(invoiceid);

    },[]);


  return (
    <>
      <div className="content">
        <Row>
                    <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">INVOICE</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Invoice ID</label>
                        <Input
                          defaultValue="111"
                          placeholder="Invoice_id"
                          disabled
                          type="label"
						  value={state.invoiceId}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Electricityboard ID</label>
                        <Input
                          defaultValue="123"
                          placeholder="electricityboard_id"
                          disabled
                          type="text"
						  value={state.Electricityboard}
                        />
                      </FormGroup>
                    </Col> */}
                 
                  
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>User ID</label>
                        <Input
                          defaultValue="123"
                          placeholder="User ID"
                          disabled
                          type="text"
						  value={state.userId}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Payment Mode</label>
                        <Input
                          defaultValue="Card"
                          placeholder="Payment Mode"
                          disabled
                          type="text"
						  value={state.PaymentMode}
                        />
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                  <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Readingdate</label>
                        <Input
                          defaultValue="2017-05-24"
                          placeholder="Readingdate "
                          disabled
                          type="date"
						  value={state.readingDate}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Bill ID</label>
                        <Input
                          defaultValue="123"
                          placeholder="Bill ID"
                          disabled
                          type="text"
						  value={state.billId}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Consumption Unit</label>
                        <Input
                          defaultValue="11"
                          placeholder="Consumption_unit"
                          disabled
                          type="text"
						  value={state.consumptionUnit}
                        />
                      </FormGroup>
                    </Col>
                    
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Net Amount</label>
                        <Input
                          defaultValue="1000"
                          placeholder="Net_amount"
                          disabled
                          type="text"
						  value={state.netAmount}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Due Date</label>
                        <Input
                          defaultValue="2017-05-24"
                          placeholder="Due date"
                          disabled
                          type="date"
						  value={state.dueDate}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="5">
                      <FormGroup>
                        <label>Status</label>
                        <Input placeholder="Status" disabled type="boolean" value={state.status} />
                        
    
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        style={{height: '40px', width : '100px'}}
                        color="primary"
                        type="submit"
                      >Print
                  
                      </Button>
                    </div>
                  </Row> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Invoice;
