import {useState,useEffect,useRef} from "react";

const CountDownTimer = () => {

    // initial Timer Values
    let [timeLeft,setTimeLeft]=useState(60)// initial value of timer
    let timerRef=useRef(null)  // used for holding the Interval Ids


// function to start the Timer
const startTimer=()=>{
    if(timerRef.current)return; //these avoids causing the multiple intervals
   timerRef.current=setInterval(()=>{
    setTimeLeft(prevtime=>{
        if(prevtime<=1){ //checking weather Timer is Reached 1 and below to remove it from ui
            clearInterval(timerRef.current)
            timerRef.current=null;
            return 0
        }
        return prevtime-1
    })

   },1000)//timer updates every sec

}
// function to stop the Timer
const stopTimer=()=>{
    clearInterval(timerRef.current)
    timerRef.current=null;
}
// function to Reset the Timer
const resetTimer=()=>{
    stopTimer()
    setTimeLeft(60)
}

// useEffect To clear the Timer from the Compoenent -unmounting
useEffect(()=>{

    return ()=>clearInterval(timerRef.current)

},[])



  return (
    <div className="container ">
      <div className="card p-4 text-center shadow my-5">
        <h1 className="display text-success my-3">{timeLeft}seconds</h1>
        <div className="buttons d-flex justify-content-center">
          <button className="btn btn-success" onClick={()=>startTimer()}>Start</button>
          <button className="btn btn-warning mx-1 "  onClick={()=>stopTimer()}>Stop</button>
          <button className="btn btn-danger"  onClick={()=>resetTimer()}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
