const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = "mongodb+srv://walidelabad:123123123@todos.w836d.mongodb.net/?retryWrites=true&w=majority&appName=todos";
const PORT = 3030;

const app = express();
const quizRoutes = require("./routes/quizRoutes");

app.use(express.json());

app.use(cors());
mongoose.connect(uri).then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/quizlists",quizRoutes);

app.listen(PORT , () => {
    console.log("The server is listening on port " + PORT);
});


