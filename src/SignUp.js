import React, {useState} from 'react';
import "./SignUp.css"
import { ref, set} from "firebase/database";
import { db , auth } from "./firebase.js"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import SignupSuccess from './SignupSuccess.js';
 


function SignUp(props){
 
 

const[email ,setEmail]=useState("");
  
 const[password,setPassword]=useState(''); 
 const[name,setName]=useState("");
 const[date,setDate]=useState('');

 const[isSignupSuccess, setIsSignupSuccess]=useState(false);
//  const navigate= useNavigate();
 

 const handleonSubmit= async(e) =>{
    e.preventDefault()

    await createUserWithEmailAndPassword(auth,email,password)
    .then(async(userCredential)=>{
        const user=userCredential.user;
       
        const userId=Math.floor(Math.random()*10000);
 writeUserData(userId,name,email,date)

 
    

        console.log(user);
        setIsSignupSuccess(true);
        // navigate("/signUpSuccess",{state:{date : date}} );
        console.log("isSignupSuccess:", isSignupSuccess);
    
      
        })
        .catch((error) =>{
        const errorCode =error.code;
        const errorMessage =error.message;
        console.log(errorCode,errorMessage);
    });
   
    }
    function writeUserData(userId,name,email,date){
        console.log('User Data:',{userId,name,email,date});
        set(ref(db,"users/" + userId),{
            date:date,
            email:email, 
            username:name
                 });
    }
   
       
    

 
 return(
    <main id="container">
        <section className="section">
            <div>
                <div>
                    <h1> Sign Up Page</h1>
                    <form id="form1">
                        <div>
                            <label htmlFor="name" className="label">
                                Name
                            </label>
                            <input type="name"
                            className="input"
                            label="Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder = "Enter your name"
                            required />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="label">
                                Email Address
                            </label>
                            <input type="email"
                            label="Email address"
                            className="input"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email address"
                            required />
                        </div>
                        <div>
                            <label htmlFor="password" className="label">
                                Password
                            </label>
                            <input 
                            type="password"
                            label="Create password"
                            className="input"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password"
                            required />
                        </div>
                        <div>
                            <label htmlFor="date" className="label">
                                BirthDate
                            </label>
                            <input 
                            type="date"
                            label="birth date"
                            className="input"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            placeholder="Enter your birthdate"
                            required />
                        </div>

                        <div>
                        {isSignupSuccess ?( <SignupSuccess date={date} /> ):(<div> <h2>Signup</h2>
                    

                        <button 
                        className="btn"
                        type="submit"
                        onClick= {handleonSubmit}
                        >
                            Sign Up
                        </button>
                        </div>)} </div>
                       
                    </form>
                   
                    
                    
                </div>
            </div>
            <h3>
                        Aready Have an account?{""}
                       
                        <Link to="/">Login</Link>
                       
                    </h3>
        </section>
    </main>
 )
 


}

export default SignUp;

