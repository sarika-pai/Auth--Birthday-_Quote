
import React,{useState,useEffect } from 'react';
 import { db } from './firebase'; 
 import { onValue, ref } from 'firebase/database';  
 import {Link} from "react-router-dom"





 const BirthdayCountdown = ({ birthdate }) => {
    const [daysRemaining, setDaysRemaining] = useState(null);     
    useEffect(() => { 
        if (!birthdate) {
            // Handle the case where birthdate is undefined
            return;
          }
    const today = new Date();
    const birthdateArray = birthdate.split('-');

    if (birthdateArray.length !== 3) {
     
      return;
    }
    const nextBirthday = new Date(today.getFullYear(), birthdate.split('-')[1] - 1, birthdate.split('-')[2]);
  
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
  
    const daysDifference = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
      setDaysRemaining(daysDifference)
},[]);

if (daysRemaining === null) {
    return null;
  } 
const daysDifference= daysRemaining;
    if (daysDifference === 0) {
      return <h1>Happy Birthday!</h1>;
    } else if (daysDifference > 0 && daysDifference < 365) {
      return <h1>{daysDifference} days until your birthday</h1>;
    } else {
      return null;
    }
}

 
  
  const CreateUserForm = () => {
    const [toDoList, setToDoList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    let date="";
    let username="";
    let email="";
  const currentUserId="123";
    useEffect(() => {
      const toDoref = ref(db, 'users');
      onValue(toDoref, (snapshot) => {
        const userInfo = snapshot.val();
        const newToDoList = [];
       
  
        for (let id in userInfo) {
          newToDoList.push({ id, ...userInfo[id] });
        }
  
        setToDoList(newToDoList);
        
        return()=>{
            toDoList.map((item, index) => (
             date=item.date,
              username=item.username,
               email=item.email
            ))
        };
      });
    }, [db]);
  
    return (
      <div>
        {toDoList.map((item, index) => (
          <div key={index}>
            <label> Display Name:{item.username} </label>
            <h1 className="massge">
             Welcome {item.username}   </h1>
            <Link to={"./Login.js"}> Go to Login</Link>
          </div>
        ))}
        <div>
        {currentUser && (
        <div>
          <h1>
            Welcome {currentUser.username} <BirthdayCountdown birthdate={currentUser.date} />
          </h1>
        </div>
      )}
        </div>

      </div>
    );
  };
  
  export default CreateUserForm;




























