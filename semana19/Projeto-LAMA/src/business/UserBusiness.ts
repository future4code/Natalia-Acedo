import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { User, stringToUserRole } from "../model/User";
import { NotFoundError, UnauthorizedError } from "../errors/NotFoundError";
import { RefreshTokenDataBase } from "../data/RefreshTokenDatabase";

export class UserBusiness {
  constructor(
    private userDataBase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator,
    private refreshTokenDatabase: RefreshTokenDataBase
  ) {}

  public async signup(
    email: string,
    name: string,
    password: string,
    role: string,
    device: string
  ) {
    if (!name || !email || !password || !role || !device) {
      throw new InvalidParameterError("Missing input");
    }

    if (email.indexOf("@") === -1) {
      throw new InvalidParameterError("Invalid email");
    }

    if (password.length < 6) {
      throw new InvalidParameterError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashGenerator.createHash(password);

    await this.userDataBase.createUser(
      new User(id, email, name, hashPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generateToken(
      { id, role },
      process.env.ACCESS_TOKEN_EXPIRES_INN
    );

    const refreshToken = this.tokenGenerator.generateToken(
      { id, device },
      process.env.REFRESH_TOKEN_EXPIRES_IN
    );

    await this.refreshTokenDatabase.storeRefreshToken(
      refreshToken,
      device,
      true,
      id
    );

    return { accessToken, refreshToken };
  }

  public async login(email: string, password: string, device: string) {
    if (!email || !password || !device) {
      throw new InvalidParameterError("Missing input");
    }

    const user = await this.userDataBase.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const verifyPassowrd = this.hashGenerator.compare(
      password,
      user.getPassword()
    );

    if (!verifyPassowrd) {
      throw new InvalidParameterError("Invalid input");
    }

    const accessToken = this.tokenGenerator.generateToken(
      { id: user.getId(), role: user.getRole() },
      process.env.ACCESS_TOKEN_EXPIRES_INN
    );

    const refreshToken = this.tokenGenerator.generateToken(
      { id: user.getId(), device },
      process.env.REFRESH_TOKEN_EXPIRES_IN
    );

    const retrievedTokenFromDatabase = await this.refreshTokenDatabase.getRefreshTokenByIdAndDevice(
      user.getId(),
      device
    );

    if (retrievedTokenFromDatabase) {
      await this.refreshTokenDatabase.deleteRefreshToken(
        retrievedTokenFromDatabase.token
      );
    }

    await this.refreshTokenDatabase.storeRefreshToken(
      refreshToken,
      device,
      true,
      user.getId()
    );

    return { accessToken, refreshToken };
  }

  public async refreshToken(refreshToken: string, device: string) {
    const refreshTokenData = this.tokenGenerator.getData(refreshToken);

    if (refreshTokenData.device !== device) {
      throw new UnauthorizedError("Different devices");
    }

    const user = await this.userDataBase.getUserById(refreshTokenData.id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const accessToken = this.tokenGenerator.generateToken(
      { id: user.getId(), role: user.getRole() },
      process.env.ACCESS_TOKEN_EXPIRES_IN
    );

    return accessToken;
  }
}
