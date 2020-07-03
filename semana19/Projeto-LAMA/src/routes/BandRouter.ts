import express from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = express.Router()

bandRouter.get("/details/:id", new BandController().getBandDetails)
bandRouter.post("/register", new BandController().registerBand);
