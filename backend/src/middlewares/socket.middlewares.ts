import { Response, NextFunction } from "express";
import { RequestInterface } from "../interfaces";

export const socketMiddleware = (
  request: RequestInterface,
  response: Response,
  next: NextFunction
) => {};
