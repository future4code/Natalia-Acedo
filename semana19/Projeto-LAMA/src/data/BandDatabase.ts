import { BaseDataBase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDataBase {
  protected TABLE_NAME: string = "Band_Lama";

  private toModel(dbModel: any): Band {
    return new Band(
      dbModel.id,
      dbModel.name,
      dbModel.music_genre,
      dbModel.responsible
    );
  }

  public async createBand(band: Band): Promise<void> {
    await super.getConnection().raw(`
            INSERT INTO ${this.TABLE_NAME} (id, name, music_genre, responsible)
            VALUES(
                '${band.getId()}',
                '${band.getName()}',
                '${band.getMusicGenre()}',
                '${band.getResponsible()}'
            )
        `);
  }

  public async getBandById(id: string): Promise<Band> {
    const result = await super.getConnection().raw(`
        SELECT * FROM ${this.TABLE_NAME}
        WHERE id = '${id}'
    `);
    return this.toModel(result[0][0]);
  }
}
