import React,{useState,useEffect} from 'react'
import './App.css';
import SignUp from './SignUp';
import Login from './Login'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ToDoList from './ToDoList';
import SignupSuccess from './SignupSuccess';
import BirthdayCount from './BirthdayCount';



function App() {
    const[currentForm,setCurrentForm]=useState("login");
    const[currentPage,setCurrentPage]=useState("SignUp");
   
    const toggleForm=(formName)=>{
     setCurrentForm(formName); 
    }
     const togglePage=(pageName)=>{
        setCurrentPage(pageName);
     
    }
   
    return (
        <>
         

        <BrowserRouter>
       
            <Routes>
               
               <Route path="/" element={<Login onFormSwitch={toggleForm}/>} />
               <Route path="/SignUp" element={<SignUp onFormSwitch={toggleForm} />} />
               <Route path= "/signup-success" component={SignupSuccess}/>
               <Route path="/BirthdayCount" element={<BirthdayCount/>}/>
               <Route path="/ToDoList" element={<ToDoList/>} />
            
            </Routes>
        
        </BrowserRouter>
           
    </>
    );
}


 
export default App;






{/* <Route path="/CreateUser" element={<CreateUserForm />}/> */}


// <BrowserRouter>
// <Routes>
//     <Route path={"./"}element={<Home/>}/>
// <Route path={"./SignUp"} element={ <SignUp/>} />
// <Route path={"./Login"} element={ <Login/>} />
// <Route path={"./CreateUser"} element={ <CreateUserForm/>} />
// </Routes>
// </BrowserRouter>
   