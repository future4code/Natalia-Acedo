import * as moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export abstract class Mission {
  protected name: string;
  protected teachers: Teacher[] = [];
  protected students: Student[] = [];
  constructor(
    protected id: number,
    protected startDate: moment.Moment,
    protected endDate: moment.Moment,
    protected currentModule: number | undefined = undefined
  ) {}

  public abstract getAllStudents(): Student[];
  public abstract addStudent(student: Student): void;
  public abstract getAllTeachers(): Teacher[];
  public abstract addTeacher(teacher: Teacher): void;

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStartDate(): moment.Moment {
    return this.startDate;
  }

  public getEndDate(): moment.Moment {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAgeById(id: number): any {
    this.students = this.getAllStudents();
    this.students.find((student) => {
      if (student.id === id) {
        return console.log(moment().diff(student.birthday, "years"));
      }
    });
  }
}