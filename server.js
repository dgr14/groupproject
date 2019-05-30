const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 7000
const path = require("path")
// const PORT = process.env.PORT || 5000;

// Middlewares for every request 
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


// Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/expenses",
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Routes - Endpoints
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/auth", require("./routes/authRouter"));
app.use("/api/expenses", require('./routes/expenseRouter'))

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
});