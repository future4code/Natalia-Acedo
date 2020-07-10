import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  private static TABLE_NAME = "Recipe";

  public async createRecipe(
    id: string,
    title: string,
    description: string,
    date: Date,
    userId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, title, description, date, user_id: userId })
        .into(RecipeDatabase.TABLE_NAME);
    } catch (err) {
      console.error(err.message);
    }
  }

  public async getRecipeById(id: string): Promise<any> {
    try {
      const resultDataBase = await this.getConnection()
        .select("*")
        .from(RecipeDatabase.TABLE_NAME)
        .where({ id });

      return resultDataBase[0];
    } catch (err) {
      console.error(err.message);
    }
  }

  public async editRecipe(
    id: string,
    title: string,
    description: string
  ): Promise<void> {
    try {
      await this.getConnection().raw(
        `
        UPDATE ${RecipeDatabase.TABLE_NAME}
        SET title = "${title}",
        description = "${description}"
        WHERE id = "${id}";
      `
      );
    } catch (err) {
      console.error(err.message);
    }
  }

  public async deleteRecipe(
    id: string
  ): Promise<void> {
    try {
      await this.getConnection().raw(
        `
        DELETE  
        FROM ${RecipeDatabase.TABLE_NAME}
        WHERE id = "${id}";
      `
      );
    } catch (err) {
      console.error(err.message);
    }
  }
}
