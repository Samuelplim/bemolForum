import { CustomerInterface } from "../interfaces";
import { compare, hash } from "bcrypt";
import { AppError } from "../utils/AppError";

class CustomerService {
  userRepository: any;

  constructor(userRepository: any) {
    this.userRepository = userRepository;
  }

  async create(customer: CustomerInterface) {
    if (customer.password.length < 7) {
      throw new AppError("Tamanho mínimo para senha é de 8 dígitos");
    }
    const verifyUserEmailExists = await this.userRepository.findByEmail(
      customer.email
    );
    if (verifyUserEmailExists) {
      throw new AppError("Este email está sendo utilizado");
    }
    customer.password = await hash(customer.password.valueOf(), 8);

    const userId = await this.userRepository.create(customer);
    return userId;
  }

  async findByEmail(customer: CustomerInterface) {
    const customerResponse = await this.userRepository.findByEmail(
      customer.email
    );
    if (!customerResponse) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }
    const passwordVerification = await compare(
      customer.password.valueOf(),
      customerResponse.password
    );

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    return customerResponse;
  }
  async remove({ cpf }: { cpf: string }) {
    console.log("log", cpf);
    const customerResponse = await this.userRepository.remove(cpf);
    console.log("log 2", customerResponse);

    return customerResponse;
  }
}

export { CustomerService };
