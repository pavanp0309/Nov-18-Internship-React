import { useState, useEffect } from "react";
import Header from "./Header";
import Confetti from "react-confetti";

const CountDownTimer = () => {
  let targetedTime = new Date("2024-01-01T00:00:00");

  // calculate the Time Left for the Event
  let calculateTimeLeft = () => {
    let now = new Date();
    let remainingTime = targetedTime - now;
    console.log(remainingTime);

    // checking the waether the Time is reached
    if (remainingTime <= 0) {
      return { hours: 0, min: 0, sec: 0 };
    }

    // converting the Time into readable format
    let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    let min = Math.floor((remainingTime / (1000 * 60)) % 60);
    let sec = Math.floor((remainingTime / 1000) % 60);
    console.log(hours, min, sec);

    return { hours, min, sec };
  };

  //  useState for Holding the data
  let [timeleft, setTimeLeft] = useState(calculateTimeLeft());
  let [showConfetti, setShowConfetti] = useState(false);
  let [isNewFest, setIsNewFest] = useState(false);

  // useEffect for Handling the uiUpdate(sideEffects)
  useEffect(() => {
    if (timeleft.hours === 0 && timeleft.min == 0 && timeleft.sec == 0) {
      setShowConfetti(true);
      setIsNewFest(true);
      
    //    remove the confetti after 10 min
    let confettiRemovall = setTimeout(() => {
        setShowConfetti(false);
      }, 10 * 60 * 1000);
  
      // cleanup
      return () => {clearTimeout(confettiRemovall)};
    }



    // updating the Timer Everysec
    let timer=setTimeout(()=>{
        setTimeLeft(calculateTimeLeft())
    },1000)

    return ()=>clearTimeout(timer)


  }, [timeleft]);

  return (
    <div className="countdown-timer ">
      <Header isNewFest={isNewFest} timeleft={timeleft}/>
      {showConfetti && <Confetti/>} {/* short-circuiting for conditional rendering the ui */}
    </div>
  );
};

export default CountDownTimer;
