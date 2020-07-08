import { BaseDataBase } from "./BaseDatabase";

export class RefreshTokenDataBase extends BaseDataBase {
  protected TABLE_NAME = "Lama_RefreshToken";

  public async storeRefreshToken(
    token: string,
    device: string,
    isActive: boolean,
    userId: string
  ): Promise<void> {
    const tokenIsActive = super.convertBooleanToInt(isActive);
    await this.getConnection().raw(`
        INSERT INTO ${this.TABLE_NAME}
          VALUES(
            '${token}',
            '${device}',
            '${tokenIsActive}',
            '${userId}'
          )
      `);
  }

  public async getRefreshTokenByIdAndDevice(
    id: string,
    device: string
  ): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${this.TABLE_NAME}
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
      DELETE FROM ${this.TABLE_NAME}
      WHERE refresh_token = "${token}" 
    `);
  }
}
