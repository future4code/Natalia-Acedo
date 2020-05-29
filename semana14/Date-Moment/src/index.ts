import * as fs from "fs";
import * as moment from "moment";
moment.locale('pt-br')

type event = {
    name: string;
    description: string;
    date:string;
};

let allEvents: event[] = [];

const nameArg: string = process.argv[2]
const descriptionArg: string = process.argv[3]
const dateArg: any = moment(process.argv[4], "DD-MM-YYYY")

const today = moment().unix()

const getEvents = (): any => {
    return JSON.parse(fs.readFileSync("allEvents.json", "utf-8"))
};

console.log(getEvents())

const createEvent = (name: string, description: string, date: string) => {
  const newEvent: event = {
    name,
    description,
    date
  };

  allEvents = getEvents()

  const newDate = moment(date, "DD/MM/YYYY").unix()

  if (name && description && date !== "Invalid date") {

    if(newDate > today) {
        allEvents.push(newEvent);
        fs.writeFileSync("allEvents.json", JSON.stringify(allEvents));
    
        console.log(newEvent);
    } else {
        console.log("Please, type a valid date.")
    }
    
  } else {
    console.log("Please, type all required information");
  }
};


createEvent(nameArg, descriptionArg, dateArg.format("DD-MM-YYYY"))
