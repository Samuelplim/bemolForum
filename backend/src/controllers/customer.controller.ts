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

  async findByEmail(request: Request, response: Response) {
    const customerRepository = new CustomerRepository();
    const customerService = new CustomerService(customerRepository);
    const customer = await customerService.findByEmail(request.body);

    return response.status(200).json(customer);
  }
  async remove(request: Request, response: Response) {
    const customerRepository = new CustomerRepository();
    const customerService = new CustomerService(customerRepository);
    const customer = await customerService.remove(request.body);

    return response.status(200).json(customer);
  }
}

export { CustomerController };
