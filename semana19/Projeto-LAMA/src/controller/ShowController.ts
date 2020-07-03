import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDataBase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class ShowController {
  private static ShowBusiness = new ShowBusiness(
    new ShowDataBase(),
    new IdGenerator()
  );

  public async createShow(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      const authenticationData = new TokenGenerator().getData(token);

      const showData = {
        week_day: req.body.week_day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        band_id: req.body.band_id,
      };


      await ShowController.ShowBusiness.createShow(
        showData.week_day,
        showData.start_time,
        showData.end_time,
        showData.band_id
      );

      res.status(200).send({
        message: "Scheduled show",
      });
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
