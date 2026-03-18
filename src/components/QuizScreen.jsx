import { useState } from "react";
import { questions } from "../data/questions";
import "./QuizScreen.css";

export default function QuizScreen({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const q = questions[current];
  const progress = (current / questions.length) * 100;

  const handleSelect = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
  };

  const handleNext = () => {
    const newScore = score + (selected === q.answer ? 1 : 0);
    if (current + 1 >= questions.length) {
      onFinish(newScore, questions.length);
    } else {
      setScore(newScore);
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const getOptionClass = (index) => {
    if (!answered) return "option";
    if (index === q.answer) return "option correct";
    if (index === selected && index !== q.answer) return "option wrong";
    return "option dimmed";
  };

  return (
    <div className="quiz-screen">
      <div className="quiz-card">
        <div className="quiz-header">
          <span className="question-counter">
            Question {current + 1} / {questions.length}
          </span>
          <span className="score-badge">Score: {score}</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="question-box">
          <p className="question-text">{q.question}</p>
        </div>

        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={getOptionClass(i)}
              onClick={() => handleSelect(i)}
            >
              <span className="option-letter">{["A", "B", "C", "D"][i]}</span>
              <span className="option-text">{opt}</span>
              {answered && i === q.answer && (
                <span className="option-icon">✓</span>
              )}
              {answered && i === selected && i !== q.answer && (
                <span className="option-icon">✗</span>
              )}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback ${selected === q.answer ? "feedback-correct" : "feedback-wrong"}`}>
            {selected === q.answer
              ? "🎉 Correct! Well done!"
              : `❌ Wrong! The answer is: ${q.options[q.answer]}`}
          </div>
        )}

        {answered && (
          <button className="next-btn" onClick={handleNext}>
            {current + 1 >= questions.length ? "See Results" : "Next Question"}
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
