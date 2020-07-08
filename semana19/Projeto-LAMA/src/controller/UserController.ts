import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { RefreshTokenDataBase } from "../data/RefreshTokenDatabase";
import { BaseDataBase } from "../data/BaseDatabase";

export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator(),
    new RefreshTokenDataBase()
  );

  async signup(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.email,
        req.body.name,
        req.body.password,
        req.body.role,
        req.body.device
      );

      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.login(
        req.body.email,
        req.body.password,
        req.body.device
      );

      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
        const result = await UserController.UserBusiness.refreshToken(
            req.body.refreshToken,
            req.body.device
          );
        res.status(200).send({ result });
      } catch (err) {
        res.status(err.errorCode || 400).send({ message: err.message });
      }
  }
}
