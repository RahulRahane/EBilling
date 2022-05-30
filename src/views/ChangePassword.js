/*import React, {useState} from 'react';

function ChangePassword() {
    return(
      <div className="form">
          <div className="form-body">
               <div className="current-password">
                  <label className="form__label" for="currentPassword">Current Password </label>
                  <input className="form__input" 
                  type="password" 
                  id="currentPassword" 
                  placeholder="Current Password"
                  required
                  />
              </div>
			  <div className="new-password">
                  <label className="form__label" for="newPassword">New Password </label>
                  <input className="form__input" type="password" id="newPassword" placeholder="New Password"/>
              </div>
              
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Change Password</button>
          </div>
      </div>      
    )       
}
export default ChangePassword;*/




// import React from "react";

// import loginPage from "views/Login.css";
// // reactstrap components
// import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


// function ChangePassword() {
//   return (
//     <>
    
//       <div className="content">
//         <Row>
//           <Col md="12">
//             <Card>
// 			<CardHeader> <h6 className="text-info">
			 
			
// 				 </h6></CardHeader>
//               <CardBody>
              
// 			  <div className="ChangePassword">
//         <h2>ChangePassword</h2>
		
//         <form className="form">
//           <div className="input-group">
//             <label htmlFor="current-password">Current-Password</label>
//             <input  type="password" name="Change-Password"
//             required/>
//           </div>
// 		  <div className="input-group">
//             <label htmlFor="new-password">New-Password</label>
//             <input type="password" name="New-Password"
//             required/>
//           </div>
		 
//           <div className="input-group">
//             <label htmlFor="confirm-password">Confirm-Password</label>
//             <input type="password" name="Confirm-Password" 
//             required/>
//           </div>
//           <button className="primary">Change Password</button>
         
// ?

         
//         </form>
//       </div>
                
//              </CardBody>
//             </Card>
			
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }

// export default ChangePassword;

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function ChangePassword() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(6, 'Password must be at 6 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  let history = useHistory();
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    alert('Password changed successfully');
    history.push("/Dashboard");
  }
  return (

    
       <div className="content">
         <Row>
           <Col md="12">
             <Card>
 			<CardHeader> <h6 className="text-info">
			 
			
 				 </h6></CardHeader>
              <CardBody>
    

    <div className="container mt-5">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">

             <label htmlFor="current-password">Current-Password</label>

             <input name="Change Password" type="password"

             required

              {...register('password')}

              className={`form-control ${errors.password ? 'is-invalid' : ''}`}

            />

            <div className="invalid-feedback">{errors.password?.message}</div>

          </div>
		  
		  

        <div className="form-group">
          <label>New Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
        
        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    </CardBody>
             </Card>
			
           </Col>
          </Row>
       </div>
  )
}

