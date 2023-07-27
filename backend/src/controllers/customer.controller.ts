import { CustomerService } from "../services/customer.services";
import { CustomerRepository } from "../repositories/customer.repository";
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class CustomerController {
  async create(request: Request, response: Response) {
    const customerRepository = new CustomerRepository();
    const customerService = new CustomerService(customerRepository);
    await customerService.create(request.body);

    return response.status(201).json();
  }
}

export { CustomerController };
