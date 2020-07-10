import { BaseDatabase } from "./BaseDatabase";

export class RefreshTokenDatabase extends BaseDatabase {
  private static TABLE_NAME = "RefreshToken";

  public async createRefreshToken(
    token: string,
    device: string,
    isActive: boolean,
    userId: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        refresh_token: token,
        device,
        is_active: super.convertBooleanToInt(isActive),
        user_id: userId,
      })
      .into(RefreshTokenDatabase.TABLE_NAME);
  }

  public async getRefreshToken(token: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${RefreshTokenDatabase.TABLE_NAME}
        WHERE refresh_token = "${token}
      `);

    const retrievedToken = result[0][0];

    if (retrievedToken === undefined) {
      return undefined;
    }

    return {
      token: retrievedToken.refresh_token,
      device: retrievedToken.device,
      isActive: super.convertIntToBoolean(retrievedToken.is_active),
      userId: retrievedToken.user_id,
    };
  }

  public async getRefreshTokenByIdAndDevice(
    id: string,
    device: string
  ): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${RefreshTokenDatabase.TABLE_NAME}
    WHERE user_id = "${id}"
    AND device = "${device}"
  `);

    const retrievedToken = result[0][0];

    if (retrievedToken === undefined) {
      return undefined;
    }

    return {
      token: retrievedToken.refresh_token,
      device: retrievedToken.device,
      isActive: super.convertIntToBoolean(retrievedToken.is_active),
      userId: retrievedToken.user_id,
    };
  }

  public async deleteRefreshToken(token: string): Promise<void> {
    await this.getConnection().raw(`
        DELETE FROM ${RefreshTokenDatabase.TABLE_NAME}
        WHERE refresh_token = "${token}"
    `);
  }
}
