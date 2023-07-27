import { CustomerService } from "../services/customer.services";
import { CustomerRepository } from "../repositories/customer.repository";
import { Request, Response } from "express";

class CustomerController {
  async create(request: Request, response: Response) {
    const customerRepository = new CustomerRepository();
    const customerService = new CustomerService(customerRepository);
    const customerId = await customerService.create(request.body);

    return response.status(201).json(customerId);
  }
}

export { CustomerController };
