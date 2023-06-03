import express from "express";
import { connectDB } from "./config/mongodb";
import { env } from "./config/enviroment";
import { BoardModel } from "./models/board.modal";

connectDB()
  .then(() => console.log("Connected successfully to database server!"))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const bootServer = () => {
  const app = express();

  app.get("/", async (req, res) => {
    // let fakeData = {
    //   title: "trello-dev-clone",
    // };

    // const result = await BoardModel.createNew(fakeData);
    // return result.ops[0];

    res.end("<h1>Hello world!</h1>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello everyone, T'm running at ${env.APP_HOST}:${env.APP_PORT}/`
    );
  });
};
