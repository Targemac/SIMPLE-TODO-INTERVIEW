const express = require("express");
const tasksRouter = require("./routes/tasksRouter");
const app = express();

// backend port
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
