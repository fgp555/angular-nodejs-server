const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const angularPath = "../frontend/dist/todo_list/browser";

// Serve React static files from /public
app.use(express.static(path.join(__dirname, angularPath)));

// Catch-all route for React SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, angularPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
