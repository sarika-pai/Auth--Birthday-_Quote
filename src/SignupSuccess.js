import React from 'react';
import BirthdayCount from './BirthdayCount';

const SignupSuccess = ({date}) => {
  console.log("Date",date)
  return (
    <div>
      <h2>Signup Successful!</h2>
      <p>Thank you for signing up. You can now access your account.{<BirthdayCount date={date}/>}</p>
    </div>
  );
};

export default SignupSuccess;