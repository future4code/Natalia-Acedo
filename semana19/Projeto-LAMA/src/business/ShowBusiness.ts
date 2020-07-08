import { ShowDataBase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";
import { Show } from "../model/Show";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDataBase,
    private idGenerator: IdGenerator
  ) {}

  public async createShow(
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
  ) {
    const startRound = Math.round(startTime);
    const endRound = Math.round(endTime);

    const showScheduled = await this.showDatabase.searchShow(
      weekDay,
      startRound
    );

    if (showScheduled) {
      throw new GenericError("A show is already scheduled at this time");
    }

    const id = this.idGenerator.generate();

    if (startTime < 8 || startTime > 23 || startTime !== startRound) {
      throw new InvalidParameterError("Invalid start time");
    }

    if (endTime < startTime || endTime > 23 || endTime !== endRound) {
      throw new InvalidParameterError("Invalid end time");
    }

    await this.showDatabase.createShow(
      new Show(id, weekDay, startTime, endTime, bandId)
    );
  }

  public async getAllShows(weekDay: string) {
    if (!weekDay) {
      throw new InvalidParameterError("Missing input");
    }

    return await this.showDatabase.getAllShowsByDay(weekDay)
  }
}
