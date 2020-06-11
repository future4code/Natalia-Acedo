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

const createTableRating = async (): Promise<any> => {
  try {
    await connection.raw(`
        CREATE TABLE Rating (
            id VARCHAR (255) PRIMARY KEY,
            comment TEXT NOT NULL, 
            rate FLOAT NOT NULL, 
            movie_id VARCHAR (255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id)
        )
        `);
  } catch (err) {
    console.error(err.message);
  }
};

//createTableRating()

const addComment = async (
  id: string,
  comment: string,
  rate: number,
  movie_id: string
): Promise<any> => {
  try {
    await connection.raw(`
        INSERT INTO Rating (id, comment, rate, movie_id)
        values(
            "${id}",
            "${comment}",
            ${rate}, 
            "${movie_id}"
        )
        `);
  } catch (err) {
    console.error(err.message);
  }
};

//addComment("006", "Incrível", 10, "105")

const dropRatingMovie = async (): Promise<any> => {
  try {
    await connection.raw(`
        ALTER TABLE Movie DROP COLUMN rating  
        `);
  } catch (err) {
    console.error(err.message);
  }
};
//dropRatingMovie();

const deleteMovie = async (id: string): Promise<any> => {
  try {
    await connection.raw(`
        DELETE FROM Movie WHERE id = ${id}
      `);
  } catch (err) {
    console.error(err.message);
  }
};
//deleteMovie("002")

const createTableCast = async (): Promise<any> => {
  try {
    await connection.raw(`
        CREATE TABLE MovieCast(
            movie_id VARCHAR(255),
            actor_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id),
            FOREIGN KEY (actor_id) REFERENCES Actor(id)
        )
        `);
  } catch (err) {
    console.error(err.message);
  }
};

//createTableCast()

const cast = async(movie_id: string, actor_id: string): Promise<any> => {
    try {
        await connection.raw(`
            INSERT INTO MovieCast(movie_id, actor_id)
            VALUES(
                "${movie_id}",
                "${actor_id}"
            )
            `);
      } catch (err) {
        console.error(err.message);
      }
}