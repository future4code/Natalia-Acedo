import * as fs from "fs";
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { FileManager } from "./FileManager";

export class FullTimeMission extends Mission {
  teachers: Teacher[] = require("../teachersFullTime.json");
  students: Student[] = require("../studentsFullTime.json");
  constructor(
    name: string,
    id: number,
    startDate: moment.Moment,
    endDate: moment.Moment,
    currentModule: number = undefined
  ) {
    super(id, startDate, endDate, currentModule);
    this.name = name
  }
  
  public getAllStudents(): Student[] {
    const fileManager = new FileManager("studentsFullTime.json");
    const students = fileManager.readFile();
    return students;
  }

  public addStudent(student: Student): void {
    try {
      this.students = this.getAllStudents();
      this.students.push(student);
      const fileManager = new FileManager("studentsFullTime.json");
      fileManager.writeFile(this.students);
    } catch (err) {
      console.error(err);
    }
  }

  public getAllTeachers(): Teacher[] {
    const fileManager = new FileManager("teachersFullTime.json");
    const teachers = fileManager.readFile();
    return teachers;
  }

  public addTeacher(teacher: Teacher): void {
    try {
      this.teachers = this.getAllTeachers();
      this.teachers.push(teacher);
      const fileManager = new FileManager("teachersFullTime.json");
      fileManager.writeFile(this.teachers);
    } catch (err) {
      console.error(err);
    }
  }
}
