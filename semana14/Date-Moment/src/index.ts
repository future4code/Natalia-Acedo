import * as fs from "fs";
import * as moment from "moment";
moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  date: string;
};

const allEvents: event[] = [];

const createEvent = (name: string, description: string, date: string) => {
  const newEvent: event = {
    name,
    description,
    date,
  };

  if (name && description && date !== "Invalid date") {
    console.log("Please, type all required information");
  } else {
    allEvents.push(newEvent);
    fs.writeFileSync("allEvents.json", JSON.stringify(allEvents));

    console.log(name);
    console.log(description);
    console.log(date);

    console.log(newEvent);
  }
};

const getEvents = (): void => {
  console.log(fs.readFileSync("allEvents.json", "utf-8"));
};

const nameArg: string = process.argv[2];
const descriptionArg: string = process.argv[3];
const dateArg: any = moment(process.argv[4], "DD MM YYY");

createEvent(nameArg, descriptionArg, dateArg);

const today = moment();
console.log("DIA DE HOJE: " + today.format("DD MM YYYY"));
