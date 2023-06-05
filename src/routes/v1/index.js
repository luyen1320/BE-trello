import express from "express";
import { HttpStatusCdoe } from "../../utilities/constant";
import { boardRoutes } from "./board.route";

const router = express.Router();

router.get("/status", (req, res) =>
  res.status(HttpStatusCdoe.OK).json({ status: "OK!" })
);

router.use("/boards", boardRoutes);

export const apiV1 = router;
