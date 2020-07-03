import express from "express";
import { ShowController } from "../controller/ShowController";

export const showRouter = express.Router()

showRouter.post("/register", new ShowController().createShow);
showRouter.get("/day", new ShowController().getAllShows)
