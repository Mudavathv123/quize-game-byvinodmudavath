import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import "./../App.css"

const MainScreen = props => {

  const { players, currentQuestion } = props;
  const qrUrl = window.location.origin + '/mobile';

  console.log(players);
  console.log(currentQuestion)

  return (
    <div className="">
      <h1 className='main-screen-heading'>Quiz Game - Main Screen</h1>
      <div className='qr-code-container'>
        <QRCodeCanvas className='qr-code' value={qrUrl} size={256} />
        <h2 className='player-joined'>Players Joined:</h2>
        <ol>
          {players.map((player, index) => (
            <li key={index} className='list-item'>{player}</li>
          ))}
        </ol>
      </div>
      <div className='question-container'>
        <h2 className= "question">{currentQuestion.question}</h2>
        <div className='options-container'>
          {currentQuestion.options.map((option, index) => (
            <button key={index} className='option'>{option}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
