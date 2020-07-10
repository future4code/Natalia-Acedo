import { BaseDatabase } from "./BaseDatabase";

export class Followers extends BaseDatabase {
  private static TABLE_NAME = "Followers";

  public async createFollower(
    idUser: string,
    userToFollowId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          user_id: idUser,
          toFollow_id: userToFollowId,
        })
        .into(Followers.TABLE_NAME);
    } catch (err) {
      console.error(err.message);
    }
  }

  
  public async unfollow(
    idUser: string,
    userToUnfollowId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .delete()
        .from(Followers.TABLE_NAME)
        .where({ toFollow_id: userToUnfollowId })
        .andWhere({ user_id: idUser });
    } catch (err) {
      console.error(err.message);
    }
  }

  public async getFeed(idUser: string): Promise<any>{
      try{
         const resultDatabase =  await this.getConnection().raw(`
            SELECT * FROM Followers
            JOIN Recipe ON toFollow_id = Recipe.user_id
            WHERE Followers.user_id = "${idUser}"
            ORDER BY date
          `)

          return resultDatabase[0]
      }catch (err) {
        console.error(err.message);
      }
  }
}
