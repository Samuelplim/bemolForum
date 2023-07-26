import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import routers from "./routers";
import connection from "./config/database";
import { errorMiddleware } from "./middlewares/error.middlewares";

const app = express();
const port = 3000;
app.set("port", port);
app.use(cors());
app.use(express.json());
app.use(routers);
app.use(errorMiddleware);

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("socket is ready for connection");
});

httpServer.listen(app.get("port"), () => {
  connection
    .then(() => console.log("conexão com banco de dados aberta"))
    .catch((err) => console.log(err));
  console.log("Express server listening on port " + app.get("port"));
});
