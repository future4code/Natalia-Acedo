import { User } from "./User";

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthday: moment.Moment,
    public specialties: TEACHER_SPECIALTY[]
  ) {}
}
