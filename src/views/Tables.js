
import React from "react";
import axios from "axios";


import { useState,useHistory, useEffect } from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {

 const[user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const head = {

      'Access-Control-Allow-Origin':'*',

      'Access-Control-Allow-Credentials': 'true'

  };
  const url = "https://localhost:5001/"

  const getProductData = async () => {
    try {
      const data = await axios.get(
        `${url}Users/`,{head}
      );
      console.log(data.data);
      setUser(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  

  


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">User List</CardTitle>
               
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
              </CardHeader>
              <CardBody>
                <Table responsive>
                <thead className="text-primary">
                    <tr>
                      <th>User ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Contact</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Pin Code</th>
                      <th>Email</th>
                      <th>Password</th>

                     
                    </tr>
                  </thead>
                  <tbody>
                  {user
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.firstName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                      <tr>
                      <td>{item.userId}</td>
                      {/* <td>{state.userType}</td> */}
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.contactNo}</td>
                      <td>{item.state}</td>
                      <td>{item.city}</td>
                      <td>{item.pinCode}</td>
                      <td>{item.emailId}</td>
                      <td>{item.password}</td>
                      {/* <td>{state.confirmPassword}</td> */}
                    </tr>
                
                );
              })}
                
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
