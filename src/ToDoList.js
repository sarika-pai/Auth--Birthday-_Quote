import React, { useEffect, useState } from 'react';
import {db} from "./firebase"
import { onValue, ref, update } from 'firebase/database';


const ToDoList = (props) => {
    const [toDoList, setToDoList] = useState([]);
  
    useEffect(() => {
      const toDoref = ref(db, "users/${current}");
      onValue(toDoref, (snapshot) => {
        const userInfo = snapshot.val();
        console.log("get user info",userInfo)
        const newToDoList = [];
  
        for (let id in userInfo) {
          newToDoList.push({ id, ...userInfo[id] });
        }
  
        setToDoList(newToDoList);
        console.log("get user info",toDoList)
      });
    }, [db]);

    
    
  
    return (
      <div>
        {toDoList.map((item, index) => (
          <div key={index}>
           
             
             {/* <h5 className="age">{Old(item.date)} years</h5> */}
            <h1 className="message">Welcome {item.username}</h1>
            <h5 className="age">{Birthday(item.date)} </h5>
            {console.log(item.Date)}
                     </div>
        ))}
        <button onClick={()=>props.onCalShow("SignUp")}></button>
      </div>
    );
  };
export default ToDoList;

function Old(personAge) {
  let year=new Date(personAge).getFullYear();
  let currentYear=new Date().getFullYear();
  let age=currentYear-year;
  return age;
}



// function Birthday(Bdate){
 
 
//   let month=new Date (Bdate).getFullYear();
//   let currentMonth=new Date().getFullYear();
//   let day =new Date(Bdate).getFullYear();
//   let currentDay=new Date().getFullYear();
  
//   const currentDate=new Date();
//   const nextBirthday = new Date(currentDate.getFullYear(), month - 1, day);

  
//         const timeDifference = nextBirthday - currentDate
   
//      const daysDifference = Math.floor(((timeDifference) / ((1000 * 60 * 60 * 24))-63250));
//   if (currentDay==day&& currentMonth==month)
//   {
//     return "Happy Birthday"
// } else{
// return `Days Remaining for your birthday:- ${daysDifference}`;
// }
// }
function Birthday(Bdate) {
  // Parse the birth date string into a Date object
  let birthDate = new Date("Bdate");

  // Get the current date
  let currentDate = new Date();

  // Extract year, month, and day components from the birth date
  let birthYear = birthDate.getFullYear();
  let birthMonth = (birthDate.getMonth() + 1).toString().padStart(2, '0'); // Add padding if necessary
  let birthDay = birthDate.getDate().toString().padStart(2, '0'); // Add padding if necessary

  // Format the birth date in "yyyy-MM-dd" format
  let formattedBirthDate = `${birthYear}-${birthMonth}-${birthDay}`;

  // Format the current date in "yyyy-MM-dd" format
  let formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

  // Calculate the next birthday
  let nextBirthday = new Date(`${currentDate.getFullYear()}-${birthMonth}-${birthDay}`);

  // Check if today is the user's birthday
  if (formattedCurrentDate === formattedBirthDate) {
    return 'Happy Birthday!';
  } else {
    // Calculate days remaining until the next birthday
    if (currentDate > nextBirthday) {
      nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }
    let daysDifference = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    return `Days Remaining for your birthday: ${daysDifference}`;
  }
}