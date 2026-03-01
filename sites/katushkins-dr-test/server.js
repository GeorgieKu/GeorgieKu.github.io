const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: чтобы квиз работал, если фронт открыт с другого домена (например GitHub Pages, а API — на Railway)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json());

// Те же участники, что и на фронтенде (в нижнем регистре)
const PLAYERS = [
  "катя",
  "гера",
  "алиса",
  "миша",
  "рита",
  "нармин",
  "юля",
  "саша",
  "даша",
];

// Количество вопросов в квизе (должно совпадать с QUIZ_DATA.length в quiz.html)
const QUIZ_LENGTH = 13;

function normalizeName(name) {
  if (!name) return "";
  return String(name)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

// Состояние квиза в памяти сервера
let quizState = {
  currentIndex: 0,
  // answersByQuestion: { [questionIndex: string]: { [playerName: string]: optionKey } }
  answersByQuestion: {},
};

function getAnswersForQuestion(index) {
  const key = String(index);
  if (!quizState.answersByQuestion[key]) {
    quizState.answersByQuestion[key] = {};
  }
  return quizState.answersByQuestion[key];
}

function allPlayersAnswered(index) {
  const answers = getAnswersForQuestion(index);
  return PLAYERS.every((p) => !!answers[p]);
}

// Выдать текущее состояние квиза
app.get("/api/state", (req, res) => {
  res.json(quizState);
});

// Принять ответ участника
app.post("/api/answer", (req, res) => {
  const { playerName, questionIndex, optionKey } = req.body || {};

  const normName = normalizeName(playerName);
  if (!PLAYERS.includes(normName)) {
    return res.status(400).json({ error: "unknown_player", message: "Имя участника не распознано." });
  }

  let qIndex = Number.isInteger(questionIndex)
    ? questionIndex
    : quizState.currentIndex;

  if (!Number.isInteger(qIndex) || qIndex < 0 || qIndex >= QUIZ_LENGTH) {
    qIndex = 0;
  }

  if (!optionKey || typeof optionKey !== "string") {
    return res.status(400).json({ error: "invalid_option", message: "Не указан вариант ответа." });
  }

  const answers = getAnswersForQuestion(qIndex);
  answers[normName] = optionKey;

  // Сохраняем обратно (объект ссылочный, но на всякий случай)
  quizState.answersByQuestion[String(qIndex)] = answers;

  res.json(quizState);
});

// Перейти к следующему вопросу (если на текущий все ответили)
app.post("/api/next-question", (req, res) => {
  const index = quizState.currentIndex;

  if (!allPlayersAnswered(index)) {
    return res.status(400).json({
      error: "not_all_answered",
      message: "Не все участники ответили на текущий вопрос.",
      state: quizState,
    });
  }

  if (quizState.currentIndex < QUIZ_LENGTH - 1) {
    quizState.currentIndex += 1;
  }

  res.json(quizState);
});

// Сбросить квиз
app.post("/api/reset", (req, res) => {
  quizState = {
    currentIndex: 0,
    answersByQuestion: {},
  };
  res.json(quizState);
});

// Раздаём статику из текущей папки (index.html, quiz.html и т.д.)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Quiz server is running on http://localhost:${PORT}`);
});

