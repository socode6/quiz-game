import "./ResultScreen.css";

export default function ResultScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return { text: "Perfect Score! 🏆", sub: "You're a web dev genius!" };
    if (percentage >= 80) return { text: "Excellent! 🌟", sub: "You really know your stuff!" };
    if (percentage >= 60) return { text: "Good Job! 👍", sub: "Keep practicing to improve!" };
    if (percentage >= 40) return { text: "Not Bad! 💪", sub: "Review the topics and try again!" };
    return { text: "Keep Learning! 📚", sub: "Don't give up, practice makes perfect!" };
  };

  const { text, sub } = getMessage();

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-emoji">
          {percentage === 100 ? "🏆" : percentage >= 80 ? "🌟" : percentage >= 60 ? "👍" : "📚"}
        </div>
        <h2 className="result-title">{text}</h2>
        <p className="result-sub">{sub}</p>

        <div className="score-circle">
          <svg viewBox="0 0 120 120" className="circle-svg">
            <circle cx="60" cy="60" r="50" className="circle-bg" />
            <circle
              cx="60"
              cy="60"
              r="50"
              className="circle-fill"
              strokeDasharray={`${(percentage / 100) * 314} 314`}
            />
          </svg>
          <div className="score-text">
            <span className="score-number">{score}</span>
            <span className="score-total">/ {total}</span>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat">
            <span className="stat-value correct-color">{score}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat">
            <span className="stat-value wrong-color">{total - score}</span>
            <span className="stat-label">Wrong</span>
          </div>
          <div className="stat">
            <span className="stat-value pct-color">{percentage}%</span>
            <span className="stat-label">Score</span>
          </div>
        </div>

        <button className="restart-btn" onClick={onRestart}>
          Play Again 🔁
        </button>
      </div>
    </div>
  );
}
