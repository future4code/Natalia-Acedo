import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole, User } from "../../src/model/User";

describe("Testing UserBusiness.allUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (err) {
      expect(err.errorCode).toBe(403);
      expect(err.message).toBe("You must be an admin to access this endpoint");
    }
  });

  test("Should return sucess", async () => {
    const getAllUsers = jest.fn(() => [
      new User("id", "Natália", "natalia@gmail.com", "hash", UserRole.ADMIN),
    ]);
    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const users = await userBusiness.getAllUsers(UserRole.ADMIN);
    expect(getAllUsers).toHaveBeenCalled();
    expect(users).toContainEqual({
      id: "id",
      name: "Natália",
      email: "natalia@gmail.com",
      role: "ADMIN",
    });
  });
});
