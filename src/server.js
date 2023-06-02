import express from "express";

const app = express();

const hostname = "localhost";
const port = 6868;

app.get("/", (req, res) => {
  res.end("<h1>Hello world!</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello everyone, T'm running at ${hostname}:${port}/`);
});
