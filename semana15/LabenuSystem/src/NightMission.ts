import { Mission } from "./Mission";
import { FileManager } from "./FileManager";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class NightMission extends Mission {
  teachers: Teacher[] = require("../teachersNight.json");
  students: Student[] = require("../studentsNight.json");
  public setName(name: string) {
    if (name.indexOf("-na-night") !== -1) {
      super.setName(name);
    }
  }
  
  constructor(
    name: string,
    id: number,
    startDate: moment.Moment,
    endDate: moment.Moment,
    currentModule: number = undefined
  ) {
    super(id, startDate, endDate, currentModule);
    this.name = name;
  }

  public getAllStudents(): Student[] {
    const fileManager = new FileManager("studentsNight.json");
    const students = fileManager.readFile();
    return students;
  }

  public addStudent(student: Student): void {
    try {
      this.students = this.getAllStudents()
      this.students.push(student);
      const fileManager = new FileManager("studentsNight.json");
      fileManager.writeFile(this.students);
    } catch (err) {
      console.error(err);
    }
  }


  public getAllTeachers(): Teacher[] {
    const fileManager = new FileManager("teachersNight.json");
    const teachers = fileManager.readFile();
    return teachers;
  }

  public addTeacher(teacher: Teacher): void {
    try {
      this.teachers = this.getAllTeachers();
      this.teachers.push(teacher);
      const fileManager = new FileManager("teachersNight.json");
      fileManager.writeFile(this.teachers);
    } catch (err) {
      console.error(err);
    }
  }
}
