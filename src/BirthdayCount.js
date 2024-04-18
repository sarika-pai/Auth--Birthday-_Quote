import React, {useEffect, useState} from "react";


 function BirthdayCount ({date}) {
    const [daysDifference, setDaysDifference]=useState(null);
    const [quote, setQuote]=useState("");

  console.log("DAte :",date);
  const currentDate=new Date();
  const currentMonth= currentDate.getMonth() ;
  const currentDay = currentDate.getDate ();
  console.log("currentday", currentDay)
  const[year, month,day]=date.split('-')
  const birthDate= new Date(year,month-1, day);
  console.log("birthdate", birthDate)
  console.log("month for next Birthday cal", month)
  console.log("day for next Birthday cal", day)
  let nextBirthday = new Date(currentDate.getFullYear() , month-1 , day);
  console.log("nextBirthday",nextBirthday)
  if (nextBirthday<=currentDate){
    nextBirthday = new Date(currentDate.getFullYear()+1 , month-1 , day);
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
        //Fetch Quote
        fetchQuote();
      }, [Difference, currentMonth, currentDay, month, day]);

     const fetchQuote = async () => {
    try {
      const response = await fetch("add type.fit link for quotes");
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      const data = await response.json();
      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.text);
      } else {
        console.error("No quotes found in the fetched data.");
      }
    } catch (error) {
      console.error("There was a problem fetching or handling the data:", error);
    }
  };
        
  if(daysDifference === 365 ||(currentMonth === month && currentDay=== day )){
            return (
              <>
            <div> Happy Birthday!!!!</div>
            <p>Quote of the Special day:<span className="quote-text"> {quote}</span></p>
            </>)
        }else if(daysDifference === 0){
            return (
            <>
            <div>Today is your birthday !</div>
            <p>Quote of the Special day:<span className="quote-text"> {quote}</span></p>
            </>
            )

        } else{
           
            return(
              <>
                <div className="birthday-container">
        <p>Days Remaining for your birthday: {daysDifference}</p>
        
        <p>Quote of the Special day:<span className="quote-text"> {quote}</span></p>
        </div>
        </>
            );
        }

         

}  


export default BirthdayCount;










