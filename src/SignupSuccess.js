import React from 'react';
import BirthdayCount from './BirthdayCount';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = ({userName ,date}) => {
  
  const navigate= useNavigate;
  console.log("Date received in SignupSuccess:", date)
  console.log("userName:", userName)
  

  return (
    <div className="container-success">
      {/* <h2>{userName} Signup Successful!</h2> */}
      <p style={{ marginBottom:"100px", gap: "50px" }}>Thank you for signing up. You can now access your account.{<BirthdayCount date={date}/>}</p>
    </div>
  );
};

export default SignupSuccess;