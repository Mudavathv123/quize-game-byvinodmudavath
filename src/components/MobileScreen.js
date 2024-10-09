import React, { useState } from 'react';
import './../App.css'

const MobileScreen = (props) => {
  const [playerName, setPlayerName] = useState('');
  const [joined, setJoined] = useState(false);

  const { currentQuestion, onAnswer, onJoin,isCorrectAnswerMsg } = props

  let textStyle = '';

  if(isCorrectAnswerMsg.slice(0,7).toLowerCase() === 'correct') textStyle = 'is-correct';
  else if(isCorrectAnswerMsg.slice(0,5).toLowerCase() === 'wrong') textStyle = 'is-wrong';
  else if(isCorrectAnswerMsg.slice(0,9).toLowerCase() === 'game over') textStyle = 'is-gameover';
  else textStyle = 'empty';

  const handleJoin = () => {
    if (playerName) {
      setJoined(true);
      onJoin(playerName);
    }
  };

  return (
    <div className='mobile-container'>
      {!joined ? (
        <div>
          <h2 className='enter-name'>Enter Your Name to Join</h2>
          <div className='input-container'>
            <input
              type="text"
              className='input-text'
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button onClick={handleJoin} className='join-button'>Join Game</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='mobile-screen-question'>{currentQuestion.question}</h2>
          <div className='options-container'>
            {currentQuestion.options.map((option, index) => (
              <button className = "mobile-option" key={index} onClick={() => onAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p className= {`text-msg ${textStyle}`}>{isCorrectAnswerMsg}</p>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;
