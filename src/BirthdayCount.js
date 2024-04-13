import React, {useEffect, useState} from "react";
import {db} from "./firebase"
import {ref, get} from "firebase/database";

 function BirthdayCount ({date}) {
    const [daysDifference, setDaysDifference]=useState(null);

  
  const currentDate=new Date();
  const currentMonth= currentDate.getMonth() ;
  const currentDay = currentDate.getDate ();
  console.log("currentday", currentDay)
  const birthDate=new Date(date);
  const month= birthDate.getMonth() ;
  const day= birthDate.getDate();
  let nextBirthday = new Date(currentDate.getFullYear() , month , day);
  if (nextBirthday<=currentDate){
    nextBirthday = new Date(currentDate.getFullYear()+1 , month , day);
  }
  // Set time components of both dates to midnight
  nextBirthday.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);
    const timeDifference = nextBirthday.getTime() - currentDate.getTime();
    console.log("timeDifference",timeDifference)
    console.log("current date",currentDate)
    console.log("nextBirthday",nextBirthday)
    
   
     const Difference = Math.ceil((timeDifference) / ((1000 * 60 * 60 * 24)));
    
      useEffect(()=>{
        let adjustedDifference= Difference;
        console.log("Differnce", Difference)
        if(currentMonth>month ||(currentMonth === month && currentDay >day)){
            if(Difference > 365){
                adjustedDifference = 365- Difference
            }
        }
        setDaysDifference(adjustedDifference);
      }, [Difference, currentMonth, currentDay, month, day]);
     
        if(daysDifference === 0 ||(currentMonth === month && currentDay=== day)){
            return <div> Happy Birthday!!!!</div>;
        }else if(daysDifference === 0){
            return <div>Today is your birthday !</div>

        } else{
           
            return(
                <div>
        <p>Days Remaining for your birthday: {daysDifference}</p>
        <p>Birthday Date: {date}</p>
        </div>
            );
        }





 

}  


export default BirthdayCount;










//      useEffect(()=>{
//        async function fetchData() {
//             try{
//                 const dataRef = ref(db, "/users");
//                 const usersSnapshot = await  get(dataRef);

//                  if(usersSnapshot.exists()){
//                     const userData = usersSnapshot.val();
//                     const userIds = Object.keys(userData);
//                     console.log("userId",userIds)
//                     const lastUserId=userIds[userIds.length-1];
//                     const lastUserData= userData[lastUserId];
//                     const lastUserDate= lastUserData.date;
//                     console.log("Last user date",lastUserDate)
//                     setBdate(lastUserDate)
                    
//             }else {
//                  console.log('User Date info not found')
//          }
//     } catch (error){
//         console.log("Error fetching data",error);
//     }
//     };
//     fetchData(); 
//  },[]);