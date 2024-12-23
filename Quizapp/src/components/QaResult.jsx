import React from 'react'

import Confetti from 'react-confetti'

const QaResult = ({ score, totalQuestion,quitQuiz,retakeQuiz}) => {
  console.log(score,totalQuestion)
  let isHighscore=score==totalQuestion;

  return (
    <div className='text-center mt-5'>
      {isHighscore &&  <Confetti recycle={false} numberOfPieces={300}  />}
      {/* displaying the quiz completed */}
      <h2 className='text-center'> Quiz Complited</h2>
      {/* displaying the score */}
      <p className='text-center'>Score: <strong>{score}/{totalQuestion}</strong></p>
      {/* displaying the  buttons to retake or Quit */}
      <div className="result-buttons d-flex justify-content-center my-2">
          <button className='btn btn-success mx-2' onClick={()=>retakeQuiz()}>Retake</button>
          <button className='btn btn-danger'  onClick={()=>quitQuiz()}>Quit</button>
      </div>
    </div>
  )
}

export default QaResult
