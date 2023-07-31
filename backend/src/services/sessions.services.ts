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

  async create(customerG: { email: string; password: string }) {
    const customer = await this.sessionsRepository.findByEmail(customerG.email);
    if (!customer) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }
    const passwordVerification = await compare(
      customerG.password,
      customer.password
    );

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const { secret, expiresIn } = authConfig;

    const token = jwt.sign({}, secret, {
      subject: customerG.email,
      expiresIn,
    });

    return { token, customer };
  }
}

export { SessionsService };
