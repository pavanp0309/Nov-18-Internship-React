import {useState,useEffect} from 'react'

const Header = ({isNewFest,timeleft}) => {
    let [currentword,setCurrentWord]=useState("incredible")


    let words=["incredible","amazing","fantastic","awesome","wonderful","beautiful","lovely","great","excellent","fabulous","marvelous","terrific","stupendous","astonishing","awe-inspiring","remarkable","extraordinary","magnificent","breathtaking","spectacular","splendid","outstanding","impressive","mind-blowing","jaw-dropping","superb","phenomenal","top-notch","first-rate","world-class","top-drawer","ace","cracking","smashing","sensational","stellar","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous","fantabulous","mega","fab","brilliant","magic","super","tremendous"];
 
    // useEffect for updating the words after everysecond
    useEffect(()=>{
        let wordChange=setInterval(()=>{
           setCurrentWord(prevword=>{
            let currentIndex=words.indexOf(prevword)
         
            return words[(currentIndex+1)% words.length]
           })
        },1000)
        
        // cleanup 
        return ()=>clearInterval(wordChange)
    },[]) //run only once


return (
    <div className='header-container d-flex justify-content-between align-items-center p-4 border'>
        {/* header-display */}
       <div className='text-start'>
       <h1 className='header-title '>{isNewFest?"Happy New Year 2025🎉🎉":"Advanced happy NewYear🎉🎉"}</h1>
       <p className='fs-3 '>Make these year <strong className='text-success fs-1'>{currentword}</strong></p>
       </div>
       {/* countdown-timer */}
       <div className="timer-section">
         <h3 className='border border-danger rounded-pill bg-warning fw-bold p-4 fs-1'>
            {timeleft.hours<10?`0${timeleft.hours}`:timeleft.hours}:
            {timeleft.min<10?`0${timeleft.min}`:timeleft.min}:
            {timeleft.sec<10?`0${timeleft.sec}`:timeleft.sec}
         </h3>
       </div>
    </div>
  )
}

export default Header
