import * as jwt from "jsonwebtoken";

export class TokenGenerator {
  public generateToken(
    input: AuthenticationData,
    expiresIn: string = process.env.REFRESH_TOKEN_EXPIRES_IN!
  ): string {
    const token = jwt.sign(
      { id: input.id, device: input.device, role: input.role },
      process.env.JWT_KEY as string,
      {
        expiresIn,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      device: payload.device,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  device?: string;
  role?: string;
}
