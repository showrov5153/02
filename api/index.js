const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/about", (req, res) => res.send("Express on Vercel"));
app.get("/c", (req, res) => res.send("this is c"));
app.post("/post", (req, res) => res.send("please post req"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;