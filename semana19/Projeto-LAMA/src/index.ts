import express from "express";
import { AddressInfo } from "net";
import { userRouter } from "./routes/UserRouter";
import { bandRouter } from "./routes/BandRouter";
import { showRouter } from "./routes/ShowRouter";

const app = express();

app.use(express.json());

app.use("/users/", userRouter);
app.use("/bands/", bandRouter)
app.use("/shows/", showRouter)

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
