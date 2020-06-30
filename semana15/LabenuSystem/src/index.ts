import * as moment from "moment";
import { Student } from "./Student";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { MainTaskManager } from "./MainTaskManager";
import { FileManager } from "./FileManager";

const name: string = process.argv[2];
const email: string = process.argv[3];
const birthday: moment.Moment = moment(process.argv[4], "DD/MM/YYYY");
const hobbie: string[] = [process.argv[5]];

const newStudent = new Student(Date.now(), name, email, birthday, hobbie);


const hamilton = new FullTimeMission(
  "Hamilton",
  8,
  moment("10/02/2020", "DD/MM/YYYY"),
  moment("28/8/2020", "DD/MM/YYYY"),
  4
);

const hamiltonNaNight = new NightMission(
  "Hamilton-na-night",
  1,
  moment("02/10/2020", "DD/MM/YYYY"),
  moment("05/10/2021", "DD/MM/YYYY"),
  undefined
);

const natalia = new Student(
  1591365812945,
  "Natália",
  "n@gmail.com",
  moment("08/03/1993", "DD/MM/YYYY"),
  ["ler"]
);

const mainTaskManager = new MainTaskManager();
console.log(mainTaskManager.addStudentFullTime(natalia));
console.log(mainTaskManager.printStudentsFullTime())