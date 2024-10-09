import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCorrectAnswerMsg, setIsCorrectAnswerMsg] = useState('');
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions] = useState([
    { question: "What's the capital of France?", options: ["A. Paris", "B. Berlin", "C. Rome", "D. Madrid"], answer: "A" },
    { question: "Who is the CEO of Tesla?", options: ["A. Jeff Bezos", "B. Bill Gates", "C. Elon Musk", "D. Mark Zuckerberg"], answer: "C" }
  ]);
  
  const handlePlayerJoin = (playerName) => {
    setPlayers([...players, playerName]);
    setIsMobile(true);
  };

  const handleAnswerSubmission = (answer) => {

    console.log("onAnswer method", answer)
    if (answer.charAt(0) === questions[currentQuestion].answer) {
      setIsCorrectAnswerMsg('Correct Answer!');

      // Move to the next question after a short delay
      setTimeout(() => {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsCorrectAnswerMsg('Game Over! All questions answered.');
        }
      }, 1000);
    } else {
      setIsCorrectAnswerMsg('Wrong Answer. Try Again!');
    }
  };

  return (
    <div className="app-container">
      {isMobile ? (
        <MobileScreen currentQuestion={questions[currentQuestion]} 
        onAnswer={handleAnswerSubmission} 
        onJoin={handlePlayerJoin} 
        isCorrectAnswerMsg = {isCorrectAnswerMsg}
        />
      ) : (
        <MainScreen
          players={players}
          currentQuestion={questions[currentQuestion]}
        />
      )}
    </div>
  );
};

export default App;
