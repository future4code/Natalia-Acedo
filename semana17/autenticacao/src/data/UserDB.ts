import knex from "knex";

export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  });

  private static TABLE_NAME = "UserAut";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const resultDB = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    return console.log(resultDB[0]);
  }

  public async getUserById(id: string): Promise<any> {
    const resultDB = await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return resultDB[0];
  }
}
