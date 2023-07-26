import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import routers from "./routers";
import connection from "./config/database";
import { RequestInterface } from "./interfaces";
import { errorMiddleware } from "./middlewares/error.middlewares";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routers);
app.use(errorMiddleware);

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);

connection
  .then(() => {
    app.listen(port, () => {
      console.log("Aplicação online na porta: ", port);
    });
  })
  .catch((err) => console.log(err));
