import express, { Router } from "express";
import { boardController } from "../../controllers/board.controller";
import { boardValidate } from "../../validations/board.validation";

const router = express.Router();

router.route("/").post(boardValidate.createNew, boardController.createNew);
//   .get((req, res) => console.log("GET boards"))
//   .post((req, res) => console.log("POST boards"));

export const boardRoutes = router;
