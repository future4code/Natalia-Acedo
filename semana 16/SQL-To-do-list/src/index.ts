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


const createTableUser = async (): Promise<any> => {
  try {
    await connection.raw(`
    CREATE TABLE User (
      id VARCHAR (255) PRIMARY KEY,
      name VARCHAR (255) NOT NULL,
      nickname VARCHAR (255) UNIQUE NOT NULL,
      email VARCHAR (255) UNIQUE NOT NULL
    )
    `);
  } catch (err) {
    console.error(err.message);
  }
};

const newId = Date.now();
const createUser = async (
  id: number,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  try {
    await connection.raw(`
    INSERT INTO User(id, name, nickname, email)
    VALUES(
      "${id}",
      "${name}",
      "${nickname}", 
      "${email}"
    )
    `);
  } catch (err) {
    console.error(err.message);
  }
};

app.put("/user", async (req: Request, res: Response) => {
  try {
    await createUser(newId, req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM User WHERE id = "${id}"
    `);
    return result[0][0];
  } catch (err) {
    console.error(err.message);
  }
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).send({
      user,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const updateUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  try {
    if (name && nickname && email) {
      await connection.raw(`
      UPDATE User 
      SET name = "${name}", 
      nickname = "${nickname}", 
      email = "${email}"
      WHERE id = "${id}"
      `);
    } else {
      console.error("Please, type all informations ");
    }
  } catch (err) {
    console.error(err.message);
  }
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await updateUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    );
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


//TAREFAS: titulo, descrição, data limite, status (3 status: to do, doing, done), usuário que criou
//MAIS DE UM USUÁRIO PODE SER RESPONSÁVEL PELA MESMA TAREFA.

const createTableTask = async (): Promise<any> => {
  try {
    await connection.raw(`
    CREATE TABLE TodoListTask (
      id VARCHAR(255) PRIMARY KEY, 
      title VARCHAR(255) NOT NULL, 
      description TEXT NOT NULL, 
      status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
      limit_date DATE NOT NULL,
      creator_user_id varchar(255) NOT NULL,
      FOREIGN KEY (creator_user_id) REFERENCES User(id)
  );
    `);
  } catch (err) {
    console.error(err.message);
  }
};

createTableTask()
