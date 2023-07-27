import { CustomerService } from "../services/customer.services";
import { CustomerRepository } from "../repositories/customer.repository";
import { Request, Response } from "express";

class CustomerController {
  async create(request: Request, response: Response) {
    const customer = request.body;

    const customerRepository = new CustomerRepository();
    const customerService = new CustomerService(customerRepository);

    await customerService.create(customer);

    return response.status(201).json();
  }
}

export { CustomerController };
