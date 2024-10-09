import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  const [isCorrectAnswerMsg, setIsCorrectAnswerMsg] = useState('');
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions] = useState([
    { question: "Saddam Beach is located in which state?", options: ["A. Tamil Nadu", "B. Kerala", "C. Maharastra", "D. Karnataka"], answer: "B" },
    { question: "Neel-Darpan’ by Din Bandhu Mitra portrays the plight of :", options: ["A. Bengali Artisans", "B. Indigo Planters", "C. Landless Labourers", "D. All of the above"], answer: "B" },
    { question: "Which of the following is correct about acceleration due to gravity? ", options: ["A.  it increases with depth", "it decreases with depth", "C.  it is independent of depth", "D.  None of the above"], answer: "B" },
    { question: "Identify the process from the options below, which is a physical change?", options: ["A. Oxidation", "B. Reduction", "C. Sublimation", "D. Decomposition"], answer: "C" },
    { question: "Who gave theory of photosynthesis?", options: ["A. Maurice Hilleman", "B. Jack Horner", "C. Jan Ingenhousz", "D. Franz Mesmer"], answer: "C" }
  ]);
  
  const handlePlayerJoin = (playerName) => {
    setPlayers([...players, playerName]);
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
    <Router>
      <div className="app-container">
      <Routes>
          <Route 
            path="/mobile" 
            element={
              <MobileScreen 
              currentQuestion={questions[currentQuestion]}
              onAnswer={handleAnswerSubmission}
              onJoin={handlePlayerJoin}
              isCorrectAnswerMsg={isCorrectAnswerMsg}
              />
            } 
          />
          
          <Route
            path="/" 
            element={
              <MainScreen 
              players={players}
              currentQuestion={questions[currentQuestion]}
            />
          }
          />
        </Routes>
    </div>
    </Router>
  );
 
};

export default App;
