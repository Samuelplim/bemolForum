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

  update(document: string, customer: Partial<CustomerInterface>) {
    return Customer.updateOne({ document: document }, { $set: customer });
  }

  remove(document: string) {
    return Customer.deleteOne({ document: document });
  }
}

export { CustomerRepository };
