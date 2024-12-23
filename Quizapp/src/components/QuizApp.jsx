import { useState } from "react";
import TestSelection from "./TestSelection";
import { Questions } from "../data/question";
import QaCard from "./QaCard";
import QaResult from "./QaResult";
import PrograssBar from "./ScrollBar";
import LeaderBoard from "./LeaderBoard";

const QuizApp = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState({});

  //  handling the selection Category
  function handleselectCategory(Category) {
    console.log(Category);
    setSelectCategory(Category);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  //  handling the answers
  function handleAnswer(selectedOption) {
    // checking the correct anwser
    let correctAnswer = Questions[selectCategory]?.[currentQuestion]?.answer;
    if (selectedOption === correctAnswer) setScore((prev) => prev + 1);

    // updating the Question
    if (currentQuestion < Questions[selectCategory].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSummary(true);
      const updatedLeaderBoard = {
        ...leaderBoard,
        [selectCategory]: Math.max(score + 1, leaderBoard[selectCategory] || 0),
      };
      setLeaderBoard(updatedLeaderBoard);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderBoard));
    }
  }

  // function for RetakeQuiz 
  function retakeQuiz(){
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  // function for Quit 
  function Quit(){
    setSelectCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  return (
    <div>
      <h1 className="text-center">QuizApp</h1>
      {!selectCategory ? (
        <TestSelection onselectCategory={handleselectCategory} />
      ) : !showSummary ? (
        <>
        <PrograssBar  currentQuestion={currentQuestion} totalQuestion={Questions[selectCategory].length} />
          <QaCard
           questionData={Questions[selectCategory][currentQuestion]}
           questionNumber={currentQuestion+1}
           totalQuestion={Questions[selectCategory].length}
           handleAnswer={handleAnswer}
           quitQuiz={Quit}
           />
        </>
      ) : (
        <>
        <QaResult
         score={score}
         totalQuestion={Questions[selectCategory].length}
         quitQuiz={Quit}
         retakeQuiz={retakeQuiz}
        />
        {/* leaderboard section */}
        <LeaderBoard  leaderBoard={leaderBoard}/>
        </>
      )}
    </div>
  );
};

export default QuizApp;
