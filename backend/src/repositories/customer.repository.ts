import { CustomerInterface } from "../interfaces";
import { Customer } from "../models/customer.model";

class CustomerRepository {
  getAll() {
    return Customer.find();
  }

  findByEmail(email: string) {
    return Customer.findOne({ email });
  }

  create(customer: CustomerInterface) {
    return Customer.create(customer);
  }

  update(cpf: string, customer: Partial<CustomerInterface>) {
    return Customer.updateOne({ cpf }, { $set: customer });
  }

  remove(cpf: string) {
    return Customer.deleteOne({ cpf });
  }
}

export { CustomerRepository };
