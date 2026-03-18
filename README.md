<div align="center">

# 🧠 Web Dev Quiz Game

### An interactive quiz application built with React + Vite

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br/>

> A fully responsive, beautifully designed quiz game to test your Web Development knowledge — built as a React assignment project.

<br/>

![Quiz App Preview](https://placehold.co/800x400/13131a/7c6cff?text=Web+Dev+Quiz+Game&font=raleway)

</div>

---

## ✨ Features

- 🎯 **10 Carefully Crafted Questions** covering HTML, CSS, JavaScript & React
- ✅ **Instant Feedback** — see if your answer is correct right away
- 📊 **Progress Bar** — track how far along you are
- 🏆 **Result Screen** — detailed score breakdown with percentage
- 🔁 **Play Again** — restart anytime with a single click
- 💅 **Sleek Dark UI** — modern design with smooth animations
- 📱 **Fully Responsive** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI components & state management |
| **Vite** | Fast dev server & build tool |
| **CSS3** | Custom styling & animations |
| **Google Fonts** | Syne + DM Sans typography |

---

## 📁 Project Structure

```
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx     # Landing / intro screen
│   │   ├── StartScreen.css
│   │   ├── QuizScreen.jsx      # Question & answer logic
│   │   ├── QuizScreen.css
│   │   ├── ResultScreen.jsx    # Final score display
│   │   └── ResultScreen.css
│   ├── data/
│   │   └── questions.js        # All 10 quiz questions
│   ├── App.jsx                 # Root component & screen routing
│   ├── App.css                 # Global styles & background
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/quiz-app.git

# 2. Navigate into the project
cd quiz-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser and visit: **http://localhost:5173**

---

## 🎮 How to Play

1. **Start** — Click the "Start Quiz" button on the welcome screen
2. **Answer** — Pick one of the 4 options for each question
3. **Feedback** — Instantly see if you got it right or wrong
4. **Next** — Move to the next question
5. **Results** — See your final score and percentage at the end
6. **Replay** — Click "Play Again" to restart

---

## 📸 Screenshots

| Start Screen | Quiz Screen | Result Screen |
|:---:|:---:|:---:|
| ![Start](https://placehold.co/240x160/13131a/7c6cff?text=Start+Screen&font=raleway) | ![Quiz](https://placehold.co/240x160/13131a/ff6c9d?text=Quiz+Screen&font=raleway) | ![Result](https://placehold.co/240x160/13131a/4ade80?text=Result+Screen&font=raleway) |

---

## 🧩 React Concepts Used

This project demonstrates the following core React concepts:

- **Functional Components** — all UI built with functions
- **useState Hook** — managing quiz state (current question, score, screen)
- **Props** — passing data between parent and child components
- **Conditional Rendering** — showing different screens based on state
- **Event Handling** — button clicks and answer selection
- **Component Composition** — breaking UI into reusable pieces

---

## 📦 Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder, ready to deploy.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ and React

⭐ Star this repo if you found it helpful!

</div>
