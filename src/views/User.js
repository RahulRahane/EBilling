import React, { useRef,useEffect } from "react";
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
} from "reactstrap";

function User() {
  
   const [state, setState] = useState({userId:"",userType:"",firstName:"",lastName:"",contactNo:"",state:"",city:"",pinCode:"",emailId:""});
    const[id, setid] = useState([]);
    
    const head = {

        'Access-Control-Allow-Origin':'*',

        'Access-Control-Allow-Credentials': 'true'

    };
    const url = "https://localhost:5001/"
    const getAllUsers = ((ids)=>{

      axios.get(`${url}Users/${ids}`,{head})

      .then((response)=>{
        var data = response.data
        // var loopData = ''
        // var i ;
        //   for(i=0; i < data.length; i++){
        //       loopData += `<li>${data[i].userId}</li>`
        //   }
        const userData = data;

        console.warn(userData);
       //console.log(id);
        setState(userData);
      })
    });
    useEffect(()=>{
      const ids = JSON.parse(localStorage.getItem('id'));
      
      if (ids) {
        setid(ids);
        console.log(ids);
       }
      getAllUsers(ids);

    },[]);
    
   return (
    <>
    <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/damir-bosnjak.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/avatardefault.png").default}
                  />
                  <h5 className="title">{state.firstName} {state.lastName}</h5>
                </div>
              </CardBody>
              
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">User Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>User ID</label>
                        <Input
                          disabled
                          placeholder="UserID"
                          type="text"
						              value={state.userId}
                          onChange={(e)=>{setState(e.target.value)}}
						  
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>User Type</label>
                        <Input
                          placeholder="UserType"
                          disabled
                          type="text"
						              value="Customer"
                          onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Pooja"
                          placeholder="First Name"
                          type="text"
						              value={state.firstName}
                          onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Joshi"
                          placeholder="Last Name"
                          type="text"
						              value={state.lastName}
                          onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          defaultValue="Email"
                          placeholder="Email"
                          type="text"
						  value={state.emailId}
              onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          defaultValue="9876543213"
                          placeholder="Contact Number"
                          type="text"
						  value={state.contactNo}
              onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Home Address"
                          placeholder="Home Address"
                          type="text"
                          value={state.city}
                          onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Pune"
                          placeholder="City"
                          type="text"
						  value={state.city}
              onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>State</label>
                        <Input
                          defaultValue="Maharashtra"
                          placeholder="state"
                          type="text"
						  value={state.state}
              onChange={(e)=>{setState(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Zip Code</label>
                        <Input placeholder="ZIP Code" type="number" value={state.pinCode}  onChange={(e)=>{setState(e.target.value)}}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        
                      >
                        Update Profile
                      </Button>
					   <p align="center"><a href="http://localhost:3000/admin/changepassword">Change Password</a></p>
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


export default User;
