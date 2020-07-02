import { User, performPurchase } from "../src/performPurchase";

describe("Testing performPurchase", () => {
  test("Testing balance greater than value", () => {
    const mockUser: User = {
      name: "MyName",
      balance: 40,
    };

    const result = performPurchase(mockUser, 30);

    expect(result).toEqual({ name: "MyName", balance: 10 });
  });

  test("Testing balance equal to value", () => {
    const mockUser: User = {
      name: "MyName",
      balance: 40,
    };

    const result = performPurchase(mockUser, 40);

    expect(result).toEqual({ name: "MyName", balance: 0 });
  });

  test("Testing balance lass than to value", () => {
    const mockUser: User = {
      name: "MyName",
      balance: 40,
    };

    const result = performPurchase(mockUser, 50);

    expect(result).toEqual(undefined);
  });
});
