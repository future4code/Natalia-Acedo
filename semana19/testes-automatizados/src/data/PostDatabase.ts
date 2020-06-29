import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  tableName: string = "LaPosts";
  public async createPost(
    id: string,
    photo: string,
    description: string,
    createdAt: Date,
    type: string,
    createdBy: string
  ) {
    await this.getConnection()
      .insert({
        id,
        photo,
        description,
        createdAt,
        type,
        createdBy,
      })
      .into("LaPosts");
  }
}
