# 📚 NPTEL Quiz App

This is a web-based quiz application built to help students prepare for NPTEL courses and exams. It supports shuffled multiple-choice questions (MCQs) for various weekly topics with smooth navigation and scoring features.

## ✨ Features

- 🧠 Weekly multiple-choice questions for NPTEL courses  
- 🔥 Streak based and feedback based MCQ’s
- 🎯 Auto-scoring with shuffled MCQ's
- 📚 Topic and week-wise organization  
- ⚡ Smooth and responsive user interface  
- 🌙 Dark mode support (optional)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/msnabiel/NPTEL-Practice.git
cd nptel-quiz
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Build for production

```bash
npm run build
npm start
```

## 🧩 Tech Stack

- **Next.js / React** – Frontend framework  
- **Tailwind CSS** – For styling  
- **TypeScript** – For type safety  
- **Local JSON / Static files** – For question data  

## 📁 Folder Structure

```
/components      → Reusable UI components (QuizCard, QuestionTable, etc.)  
/pages           → App routes (index, quiz/[week].tsx)  
/data            → MCQ questions organized by week  
/styles          → Custom styling if needed  
```

## 📦 Deployment

This app can be deployed to **Vercel**, **Netlify**, or any platform that supports Next.js.

## 🙌 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

## 🧠 Upcoming Features

- Week selector with progress tracking  
- MCQ explanations and solutions  
- Print/PDF export of quizzes  
- Bookmark tricky questions  

## 📜 License

[MIT](LICENSE)

---

Made with ❤️ for fellow NPTEL learners by Nabiel.
