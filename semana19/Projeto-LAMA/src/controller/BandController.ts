import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { stringToUserRole, UserRole } from "../model/User";

export class BandController {
  private static UserBusiness = new BandBusiness(
    new BandDatabase(),
    new IdGenerator()
  );

  public async registerBand(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      const authenticationData = new TokenGenerator().getData(token);

      const role = stringToUserRole(authenticationData.role as string);
      await BandController.UserBusiness.createBand(
        role,
        req.body.name,
        req.body.musicGenre,
        req.body.responsible
      );

      res.status(200).send({
        message: "Registered band",
      });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getBandDetails(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      new TokenGenerator().getData(token);

      const id = req.params.id;

      const band = await BandController.UserBusiness.getBandDetails(id);

      res.status(200).send({
        band
      });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}

