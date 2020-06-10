import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";

dotenv.config();
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
         `);
    return console.log(result[0][0]);
  } catch (err) {
    console.error(err.message);
  }
};
//getActorByName("Nathalia Dill");

const countGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) as gender FROM Actor WHERE gender = "${gender}"
      `);
    return console.log(result[0][0]);
  } catch (err) {
    console.error(err.message);
  }
};
//countGender("female");

const updateActorSalary = async (salary: number, id: string): Promise<any> => {
  try {
    const results = await connection
      .update({ salary })
      .from("Actor")
      .where({ id });
    return results;
  } catch (err) {
    console.error(err.message);
  }
};
//updateActorSalary(10000, "001")

const deleteActor = async (id: string): Promise<any> => {
  try {
    await connection("Actor").delete().where({ id });
  } catch (err) {
    console.error(err.message);
  }
};
//deleteActor("001")

const avgSalary = async (gender: string): Promise<any> => {
  try {
    const results = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
    return console.log(results);
  } catch (err) {
    console.error(err.message);
  }
};
//avgSalary("female")

const countActorGender = app.get(
  "/actor",
  async (req: Request, res: Response) => {
    try {
      const count = await countGender(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateActorSalary(req.body.salary, req.body.id, );
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
