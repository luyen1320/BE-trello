import express from "express";
import { connectDB } from "./config/mongodb";
import { env } from "./config/enviroment";
// import { BoardModel } from "./models/board.modal";
import { apiV1 } from "./routes/v1";

connectDB()
  .then(() => console.log("Connected successfully to database server!"))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const bootServer = () => {
  const app = express();

  app.use(express.json());

  //use apis v1
  app.use("/v1", apiV1);

  // res.end("<h1>Hello world!</h1>");

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello everyone, T'm running at ${env.APP_HOST}:${env.APP_PORT}/`
    );
  });
};
