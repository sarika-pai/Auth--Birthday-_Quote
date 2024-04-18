import React, {useState} from "react";
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import {Link} from 'react-router-dom'




const Login=(props) =>{
    
    const[email,setEmail]= useState("")
    const [password,setPassword]= useState("")


const onLogin = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email.password)
    .then((userCredential)=>{
        const user= userCredential.user;
      
        console.log(user);
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage) 
    });

}

return(
    <>
    <main>
        <section className="container">
            <div>
             <p> Sign In</p> 
             <form id="form">
                <div className="form-group">
                    <label htmlFor="email-address" className="label1">
                        Email Address
                    </label>
                    <input 
                    id="email"
                    className="input1"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className= "form-group">
                    <label htmlFor="password" className="label1">
                        Password
                    </label>
                    <input 
                    id="password"
                    name="password"
                    className="input1"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <button  className="btn" onClick= {onLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div> 
                <h2 className="text-sm text-white text-center">
                    No account yet? {' '}
                    <Link to="/SignUp"> signup</Link>
                   
                   
                 </h2>
               

           
        </section>
    </main>
    </>
)
}

export default Login;