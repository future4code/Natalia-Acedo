import { User } from "./User";
import { FileManager } from "./FileManager";
import * as moment from "moment"

export class Student implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthday: moment.Moment,
    public hobbies: string[]
  ) {}
}
