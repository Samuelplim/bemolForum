import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

import { routers } from "../routers";

import { errorMiddleware } from "../middlewares/error.middlewares";

const app = express();
const port = 3000;
app.set("port", port);
app.use(cors());
app.use(express.json());
app.use(routers);
app.use(errorMiddleware);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

export { io, httpServer, app };
