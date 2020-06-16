import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

  private static TABLE_NAME = "UserAut";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const resultDB = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    return console.log(resultDB[0]);
  }

  public async getUserById(id: string): Promise<any> {
    const resultDB = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return resultDB[0];
  }

  public async delete(id: string): Promise<void> {
    await this.getConnection().delete().from(UserDatabase.TABLE_NAME).where({ id });
  }
}
