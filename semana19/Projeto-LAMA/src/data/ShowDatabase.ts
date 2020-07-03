import { Show } from "../model/Show";
import { BaseDataBase } from "./BaseDatabase";

export class ShowDataBase extends BaseDataBase {
  protected TABLE_NAME: string = "Show_Lama";

  private toModel(dbModel?: any): Show | undefined{
    return (dbModel && new Show(
      dbModel.id,
      dbModel.week_day,
      dbModel.start_time,
      dbModel.end_time,
      dbModel.band_id
    ));
  }

  public async createShow(show: Show): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.TABLE_NAME} (id, week_day, start_time, end_time, band_id)
        VALUES(
            '${show.getId()}', 
            '${show.getWeekDay()}',
            '${show.getStartTime()}', 
            '${show.gentEndTime()}', 
            '${show.getBandID()}'
        )
    `);
  }

  public async searchShow(weekDay: string, startTime: number): Promise<Show | undefined> {
      const result = await super.getConnection().raw(`
        SELECT * FROM ${this.TABLE_NAME}
        WHERE week_day = '${weekDay}'
        AND
        start_time = ${startTime}    
      `)
      return this.toModel(result[0][0])
  }
}
