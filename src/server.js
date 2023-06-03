import express from "express";
import { connectDB } from "./config/mongodb";
import { env } from "./config/enviroment";

const app = express();

connectDB().catch(console.log);

app.get("/", (req, res) => {
  res.end("<h1>Hello world!</h1>");
});

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello everyone, T'm running at ${env.HOST}:${env.PORT}/`);
});
