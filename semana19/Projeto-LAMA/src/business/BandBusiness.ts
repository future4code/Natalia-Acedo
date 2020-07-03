import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UserRole } from "../model/User";
import { UnauthorizedError, NotFoundError } from "../errors/NotFoundError";
import { Band } from "../model/Band";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async createBand(
    role: UserRole,
    name: string,
    musicGenre: string,
    responsible: string
  ) {
    if (!name || !musicGenre || !responsible) {
      throw new InvalidParameterError("Missing input");
    }

    if (role !== UserRole.ADMIN) {
      throw new UnauthorizedError(
        "You must be an admin to access this endpoint"
      );
    }

    const id = this.idGenerator.generate();

    await this.bandDatabase.createBand(
      new Band(id, name, musicGenre, responsible)
    );
  }

  public async getBandDetails(id: string) {
    if (!id) {
      throw new InvalidParameterError("Missing input");
    }
    const band = await this.bandDatabase.getBandById(id);

    if (!band) {
      throw new NotFoundError("Band not found");
    }

    return {
      id: band.getId(),
      name: band.getName(),
      musicGenre: band.getMusicGenre(),
      responsible: band.getResponsible(),
    };
  }
}
