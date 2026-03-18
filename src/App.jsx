import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("start"); // start | quiz | result
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleStart = () => setScreen("quiz");

  const handleFinish = (finalScore, totalQuestions) => {
    setScore(finalScore);
    setTotal(totalQuestions);
    setScreen("result");
  };

  const handleRestart = () => {
    setScore(0);
    setTotal(0);
    setScreen("start");
  };

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-glow" />
      {screen === "start" && <StartScreen onStart={handleStart} />}
      {screen === "quiz" && <QuizScreen onFinish={handleFinish} />}
      {screen === "result" && (
        <ResultScreen score={score} total={total} onRestart={handleRestart} />
      )}
    </div>
  );
}
