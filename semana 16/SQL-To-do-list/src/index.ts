import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import moment = require("moment");

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

const createTableTask = async (): Promise<any> => {
  try {
    await connection.raw(`
    CREATE TABLE TodoListTask (
      id VARCHAR(255) PRIMARY KEY, 
      title VARCHAR(255) NOT NULL, 
      description TEXT NOT NULL, 
      status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
      limit_date VARCHAR(255) NOT NULL,
      creator_user_id varchar(255) NOT NULL,
      FOREIGN KEY (creator_user_id) REFERENCES User(id)
  );
    `);
  } catch (err) {
    console.error(err.message);
  }
};

const newIdTask = Date.now();
const createTask = async (
  id: number,
  title: string,
  description: string,
  status: string,
  limit_date: string,
  creator_user_id: string
): Promise<any> => {
  try {
    await connection.raw(`
    INSERT INTO TodoListTask(id, title, description, status, limit_date, creator_user_id)
    VALUES(
      "${id}",
      "${title}",
      "${description}", 
      "${status}",
      "${limit_date}",
      "${creator_user_id}"
    )
    `);
  } catch (err) {
    console.error(err.message);
  }
};

//createTask(newIdTask, "Ler o livro", "Ler 200 páginas do livro", "to_do", moment("15/06/2020", "DD/MM/YYYY").format("DD/MM/YYYY"), "1591974435528")

app.put("/task", async (req: Request, res: Response) => {
  try {
    const limit_date: string = moment(req.body.limit_date, "DD/MM/YYYY").format(
      "DD/MM/YYYY"
    );
    await createTask(
      newIdTask,
      req.body.title,
      req.body.description,
      req.body.status,
      limit_date,
      req.body.creator_user_id
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

const getTaskByID = async (id: string): Promise<any> => {
  try {
    if (id) {
      const result = await connection.raw(`
        SELECT 
        LT.id as Task_id,
        LT.title,
        LT.description,
        LT.limit_date,
        LT.status,
        LT.creator_user_id,
        U.nickname 
        FROM  TodoListTask LT 
        JOIN User U ON LT.creator_user_id = U.id
        WHERE LT.id  = "${id}"
       
    `);
      return result[0][0];
    } else {
      console.log("Please, type a valid id");
    }
  } catch (err) {
    console.error(err.message);
  }
};

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await getTaskByID(req.params.id);
    res.status(200).send({
      task,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const getAllUsers = async (): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM User;
    `);
    return result[0];
  } catch (err) {
    console.error(err);
  }
};

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({
      users,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
