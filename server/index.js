const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static(path.join(__dirname, "../static")));
app.use("/dist", express.static(path.join(__dirname, "../dist"))); // Serving files from the dist folder
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../static/index.html")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
