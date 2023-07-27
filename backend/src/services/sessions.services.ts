import { CustomerInterface } from "../interfaces";
import { compare } from "bcrypt";
import { authConfig } from "../config/auth.config";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";

class SessionsService {
  sessionsRepository: any;

  constructor(sessionsRepository: any) {
    this.sessionsRepository = sessionsRepository;
  }

  async create(customer: { email: string; password: string }) {
    const customerResponse = await this.sessionsRepository.findByEmail(
      customer.email
    );
    if (!customerResponse) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }
    const passwordVerification = await compare(
      customer.password,
      customerResponse.password
    );

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const { secret, expiresIn } = authConfig;

    const token = jwt.sign({}, secret, {
      subject: customer.email,
      expiresIn,
    });

    return { token, customerResponse };
  }
}

export { SessionsService };
