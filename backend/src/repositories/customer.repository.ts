import { CustomerInterface } from "../interfaces";
import { Customer } from "../models/customer.model";

class CustomerRepository {
  getAll() {
    return Customer.find();
  }

  findByEmail(email: string) {
    return Customer.findOne({ email });
  }

  create(student: CustomerInterface) {
    return Customer.create(student);
  }

  update(document: string, student: Partial<CustomerInterface>) {
    return Customer.updateOne({ document: document }, { $set: student });
  }

  remove(document: string) {
    return Customer.deleteOne({ document: document });
  }
}

export { CustomerRepository };
