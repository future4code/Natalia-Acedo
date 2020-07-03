import { InvalidParameterError } from "../errors/InvalidParameterError";

export class User {
  constructor(
    private id: string,
    private email: string,
    private name: string,
    private password: string,
    private role: string,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): string {
    return this.role;
  }
}

export const stringToUserRole = (role: string): UserRole => {
  switch (role) {
    case "NORMAL":
      return UserRole.NORMAL;
    case "ADMIN":
      return UserRole.ADMIN;
    default:
      throw new InvalidParameterError("Invalid user role");
  }
};

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
