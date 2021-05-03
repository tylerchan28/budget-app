const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
}) // serve index.html for all files that don't have a match
// "*" matches all unmatched routes

app.listen(port, () => {
    console.log("Server is up!");
}); // port that Express uses, message


