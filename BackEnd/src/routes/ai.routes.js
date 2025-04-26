import express from "express";
import getReview from "../controllers/ai.controllers.js";
const aiRouter = express.Router();

aiRouter.post("/get-review",getReview);


export default aiRouter;