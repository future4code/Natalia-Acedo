import { BaseDataBase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {
  protected TABLE_NAME: string = "User_Lama";

  private toModel(dbModel: any): User  {
    return (
      new User(
        dbModel.id,
        dbModel.email,
        dbModel.name,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await super.getConnection().raw(`
            INSERT INTO ${this.TABLE_NAME} (id, email, name, password, role)
            VALUES(
                '${user.getId()}', 
                '${user.getEmail()}',
                '${user.getName()}', 
                '${user.getPassword()}', 
                '${user.getRole()}'
            )`);
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await super.getConnection().raw(`
            SELECT * FROM ${this.TABLE_NAME}
            WHERE email = '${email}'
        `);
    return this.toModel(result[0][0]);
  }

  public async getUserById(id: string): Promise<User> {
    const result = await super.getConnection().raw(`
            SELECT * FROM ${this.TABLE_NAME}
            WHERE id = '${id}'
        `);
    return this.toModel(result[0][0]);
  }
}
