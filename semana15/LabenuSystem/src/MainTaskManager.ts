import { FileManager } from "./FileManager";
import { Mission } from "./Mission";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import * as moment from "moment";

const fileStudentsFullTime = new FileManager("../studentsFullTime.json");
const fileTeachersFullTime = new FileManager("../teachersFullTime.json");
const fileStudentsNight = new FileManager("../studentsNight.json");
const fileTeachersNight = new FileManager("../teachersNight.json");
const fileMissions = new FileManager("missions.json");

export class MainTaskManager {
  private allMissions: Mission[] = require("../missions.json");
  private allStudentsFullTime: Student[] = require("../studentsFullTime.json");
  private allTeachersFullTime: Teacher[] = require("../teachersFullTime.json");
  private allStudentsNight: Student[] = require("../studentsNight.json");
  private allTeachersNight: Teacher[] = require("../teachersNight.json");
  private students: Student[] = [];

  public getMissions(): Mission[] {
    const fileManager = new FileManager("missions.json");
    const missions = fileManager.readFile();
    return missions;
  }

  public addMission(newMission: Mission): void {
    this.allMissions = this.getMissions();
    this.allMissions.push(newMission);
    fileMissions.writeFile(this.allMissions);
  }

  public getStudentsFulltime(): Student[] {
    const fileManager = new FileManager("studentsFullTime.json");
    const studentsFullTime = fileManager.readFile();
    return studentsFullTime;
  }

  public addStudentFullTime(newStudent: Student): void {
    this.allStudentsFullTime = this.getStudentsFulltime();

    this.allStudentsFullTime.find((student: Student) => {
      if (student.id === newStudent.id) {
        console.log("This student already exists");
      } else {
        this.allStudentsFullTime.push(newStudent);
        fileStudentsFullTime.writeFile(this.allStudentsFullTime);
      }
    });
  }

  public getStudentsNight(): Student[] {
    const fileManager = new FileManager("studentsNight.json");
    const studentsNight = fileManager.readFile();
    return studentsNight;
  }

  public addStudentNight(newStudent: Student): void {
    this.allStudentsNight = this.getStudentsNight();

    this.allStudentsNight.find((student: Student) => {
      if (student.id === newStudent.id) {
        console.log("This student already exists");
      } else {
        this.allStudentsNight.push(newStudent);
        fileStudentsNight.writeFile(this.allStudentsNight);
      }
    });
  }

  public getTeachersFullTime(): Teacher[] {
    const fileManager = new FileManager("teachersFullTime.json");
    const teacherFullTime = fileManager.readFile();
    return teacherFullTime;
  }

  public addTeacherFullTime(newTeacher: Teacher): void {
    this.allTeachersFullTime = this.getTeachersFullTime();

    this.allTeachersFullTime.find((teacher: Teacher) => {
      if (teacher.id === newTeacher.id) {
        console.log("This teacher already exists");
      } else {
        this.allTeachersFullTime.push(newTeacher);
        fileTeachersFullTime.writeFile(this.allTeachersFullTime);
      }
    });
  }

  public getTeachersNight(): Teacher[] {
    const fileManager = new FileManager("teachersNight.json");
    const teacherNight = fileManager.readFile();
    return teacherNight;
  }

  public addTeacherNight(newTeacher: Teacher): void {
    this.allTeachersNight = this.getTeachersNight();

    this.allTeachersNight.find((teacher: Teacher) => {
      if (teacher.id === newTeacher.id) {
        console.log("This teacher already exists");
      } else {
        this.allTeachersNight.push(newTeacher);
        fileTeachersNight.writeFile(this.allTeachersNight);
      }
    });
  }

  public printStudentsFullTime(): any {
    this.allStudentsFullTime.map((student: Student) => {
      const age = moment().diff(student.birthday, "years");
      return console.log(
        `Nome: ${student.name} \n
        Email: ${student.email} \n
        Curso: FullStack \n
        Idade: ${age}
        `
      );
    });
  }
}
