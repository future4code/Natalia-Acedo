import knex from "knex";
import Knex from "knex";

export abstract class BaseDatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
      });
    }
    return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }

  protected convertIntToBoolean(value: number): boolean {
    return value === 1;
  }

  protected convertBooleanToInt(value: boolean): number {
    return value ? 1 : 0;
  }
}
