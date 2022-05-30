import React from "react";
import { useState } from "react";
import loginPage from "views/Login.css";
// reactstrap components
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

import axios from "axios";



function Payment() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('bill-amount is mandatory'),
      
    confirmPwd: Yup.string()
      .required('confirm-bill-amount is mandatory')
      .oneOf([Yup.ref('password')], 'billamount does not match'),
  })
  let history = useHistory();
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
   const [state, setState] = useState({userInfo:{cardnumber:"",expirydate:"",cvv:"",billamount:"",confirmbillamount:""}});
  // const [ispayed, setIspayed] = useState(false);
 // const[id, setid] = useState([]);


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
	

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const head = { 'Access-Control-Allow-Origin':'*',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'Content-Type':'application/json'
  //     };
  //     const url = "https://localhost:5001/"
     
  //   axios.post(`${url}Payments/AddPayment`,
  //   {
      
  //   "cardnumber": state.userInfo.cardnumber,
  //   "expirydate": state.userInfo.expirydate,
  //   "cvc": state.userInfo.cvc,
  //   "billamount": state.userInfo.billamount})
  //   .then(res => {
  //      alert('in then');
  //      if(res){
  //        alert('iuu');
  //      }
  //      else{
  //        alert('hh');
  //      }
  //       // setIspayed(true);
  //       // if(setIspayed){
  //       //   alert('User Registered successfully');
        
  //       // }
        
        
  //     });
  //   }
    // useEffect(()=>{
    //   const billid = JSON.parse(localStorage.getItem('id'));
      
    //   if (billid) {
    //     setid(billid);
    //     console.log(billid);
    //    }
    

    // },[]);

    function onSubmit(data) {
     
      const head = { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type':'application/json'
        };
        const url = "https://localhost:5001/"
      axios.post(`${url}Payments/AddPayment`,
      {
        "cardnumber": state.userInfo.cardnumber,
           "expirydate": state.userInfo.expirydate,
           "cvv": state.userInfo.cvv,
           "billamount": state.userInfo.billamount,
      "confirmbillamount": state.userInfo.confirmbillamount})
        .then(res => {
         alert('in then');
         //if(res.data.status=='204'){
          console.log(res);
          
         //}else
         //alert('Please try again')
         
        });
        console.log(JSON.stringify(data, null, 4));

         alert('Payment successful');
         history.push("/Admin/Invoice");
      }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
			<CardHeader> <h6 className="text-info">
			 
			
				 </h6></CardHeader>
              <CardBody>
              
			  <div className="Payment">
        <h2>Payment</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="form">

              <div className="input-group">
            <label htmlFor="cardnumber">Card Number</label>
            <input type="number" name="cardnumber" maxlength="12"  onChange={handleChange} required="True"/>
          </div>
          <div className="input-group">
            <label htmlFor="date">Expiry Date</label>
            <input type="date" name="expirydate" onChange={handleChange} required="True"/>
          </div>
		  <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="password" maxlength='3' onChange={handleChange} name="cvv"/>
          </div>
          <div className="input-group">
            <label htmlFor="billamount">Bill Amount</label>
           <input type="number"
            name="billamount"
             onChange={handleChange}
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        
          </div>
		  <div className="input-group">
            <label htmlFor="confirm-password">Confirm-billamount</label>
           <input type="number"
            name="confirmbillamount"
             onChange={handleChange}
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
		 
  
         <button type="submit" className="primary">Payment</button><br/> <br/>
		  
        
                  
                  
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

export default Payment;
