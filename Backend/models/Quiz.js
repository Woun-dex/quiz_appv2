const mongoose = require("mongoose");

const StatisticsSchema = new mongoose.Schema({
  totalAttempts: { type: Number, required: true, default: 0 },
  correctAttempts: { type: Number, required: true, default: 0 },
  incorrectAttempts: { type: Number, required: true, default: 0 },
});

const QuestionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  mainQuestion: { type: String, required: true },
  choices: { type: [String], required: true },
  answer: { type: Number, required: true }, // Index of the correct choice
  statistics: { type: StatisticsSchema, required: true },
});

const QuizSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: { type: [QuestionSchema], required: true },
});

module.exports = mongoose.model("Quiz", QuizSchema);
