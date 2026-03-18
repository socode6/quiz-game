import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-card">
        <div className="badge">10 Questions</div>
        <h1 className="title">
          <span className="title-accent">Web Dev</span>
          <br />
          Quiz
        </h1>
        <p className="subtitle">
          Test your knowledge of HTML, CSS, JavaScript & React
        </p>
        <div className="info-row">
          <div className="info-item">
            <span className="info-icon">⏱</span>
            <span>No time limit</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🏆</span>
            <span>Score tracked</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🔁</span>
            <span>Replayable</span>
          </div>
        </div>
        <button className="start-btn" onClick={onStart}>
          Start Quiz
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
