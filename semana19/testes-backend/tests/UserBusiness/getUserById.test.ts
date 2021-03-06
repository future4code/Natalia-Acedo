import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' when user does not exist", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("invalid-id");
    } catch (err) {
      expect(err.errorCode).toBe(404);
      expect(err.message).toBe("User not found");
    }
  });

  test("Should return sucess", async () => {
    const getUserById = jest.fn((id: string) => {
      return new User(
        "id",
        "Natália",
        "natalia@gmail.com",
        "hash",
        UserRole.ADMIN
      );
    });
    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("id");
    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Natália",
      email: "natalia@gmail.com",
      role: "ADMIN",
    });
  });
});
