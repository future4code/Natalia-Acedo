export class Show {
  constructor(
    private id: string,
    private week_day: string,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ) {}

  public getId() {
    return this.id;
  }

  public getWeekDay() {
    return this.week_day;
  }

  public getStartTime() {
    return this.start_time;
  }

  public gentEndTime() {
    return this.end_time;
  }

  public getBandID() {
    return this.band_id;
  }
}
