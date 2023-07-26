import { Request } from "express";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface RequestInterface extends Request {
  io?: Server;
}
