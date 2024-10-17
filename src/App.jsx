import React, { useState } from 'react';
import './App.css'

const quizData = [
  {
    question: "Qual é a capital da França?",
    options: ["Paris", "Londres", "Berlim", "Madri"],
    answer: "Paris",
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: "Júpiter",
  },
  {
    question: "Quem escreveu 'Dom Quixote'?",
    options: ["Miguel de Cervantes", "William Shakespeare", "Homer", "Virgílio"],
    answer: "Miguel de Cervantes",
  },
  {
    question: "Qual é o elemento químico representado pelo símbolo 'O'?",
    options: ["Oxigênio", "Ouro", "Osmium", "Óxido de Carbono"],
    answer: "Oxigênio",
  },
  {
    question: "Qual mamífero é capaz de voar?",
    options: ["Morcego", "Águia", "Esquilo", "Golfinho"],
    answer: "Morcego",
  }
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          Você finalizou o quiz! Sua pontuação é {score} de {quizData.length}.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestionIndex + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;