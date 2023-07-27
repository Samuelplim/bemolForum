import { CustomerInterface } from "../interfaces";
import { hash } from "bcrypt";
import { AppError } from "../utils/AppError";

class CustomerService {
  userRepository: any;

  constructor(userRepository: any) {
    this.userRepository = userRepository;
  }

  async create(customer: CustomerInterface) {
    const verifyUserEmailExists = await this.userRepository.findByEmail(
      customer.email
    );

    if (verifyUserEmailExists) {
      throw new AppError("Este email está a ser utilizado");
    }

    if (customer.password.length < 7) {
      throw new AppError("Tamanho minimo para senha é de 8 digitos");
    }

    customer.password = await hash(customer.password.valueOf(), 8);

    const userId = await this.userRepository.create(customer);
    return userId;
  }
}

export { CustomerService };
