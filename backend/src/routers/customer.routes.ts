import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";

const customerRouter = Router();

const customerController = new CustomerController();

customerRouter.post("/", customerController.create);

export { customerRouter };
