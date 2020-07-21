import { BaseDatabase } from "./BaseDatabase";

export class UserCookenuDatabase extends BaseDatabase {
  private static TABLE_NAME = "UserCookenu";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string, 
    device: string
  ): Promise<void> {
    await this.getConnection()
      .insert({ id, email, name, password, role, device })
      .into(UserCookenuDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const resultDataBase = await this.getConnection()
      .select("*")
      .from(UserCookenuDatabase.TABLE_NAME)
      .where({ email });

    return resultDataBase[0];
  }

  public async getUserById(id: string): Promise<any> {
    const resultDataBase = await this.getConnection()
      .select("*")
      .from(UserCookenuDatabase.TABLE_NAME)
      .where({ id });

    return resultDataBase[0];
  }
}