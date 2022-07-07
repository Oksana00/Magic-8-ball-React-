import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './style.css';


function Ball() {
    let [answer, setNumber] = useState();

    let answers= [
      'Бесспорно',
      'Предрешено',
      'Ни каких сомнений',
      'Определенно да',
      'Можешь быть уверен в этом',
      'Мне кажется — «да»',
      'Вероятнее всего',
      'Хорошие перспективы',
      'Знаки говорят — «да»',
      'Да',
      'Пока не ясно, попробуй снова',
      'Спроси позже',
      'Лучше не рассказывать',
      'Сейчас нельзя предсказать',
      'Сконцентрируйся и спроси опять',
      'Даже не думай',
      'Мой ответ — «нет»',
      'По моим данным — «нет»',
      'Перспективы не очень хорошие',
      'Весьма сомнительно'
    ];

    function handleClick() {
     answer = setNumber(answers[Math.floor(Math.random() * answers.length)]);
    }


    return (
      <div id="container">
        <h2>Magic 8 ball</h2>
        <div id="answerContainer"> { answer }</div>
        <div id="button-container">
          <Button text="Узнать ответ" onClick={ handleClick } />
        </div>
      </div>
    );
  }
  
  function Button(props) {
    const { text, onClick } = props;
  
    return (
      <div>
        <button className="button" onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
  
  
  ReactDom.render(<Ball />, document.getElementById('root'));