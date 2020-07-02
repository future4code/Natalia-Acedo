import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { PostDatabase } from "./data/PostDatabase";

const app = express();
app.use(express.json());
dotenv.config();


const date = new Date()
const postDataBase = new PostDatabase().createPost("123", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJQ7jf8zXhtGr4ckI6gWCkfZi7dhIqdzX-wg&usqp=CAU", "Rick and Morty", date, "normal", "123")



const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  