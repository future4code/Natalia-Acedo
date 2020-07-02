import { LOCATION, NACIONALITY, User, Casino, verifyAge } from "../src/casino";

describe("Testing casino", () => {
  test("One brazilian allowed in Brazil", () => {
    const brazilianUser: User = {
      name: "Lucas",
      nacionality: NACIONALITY.BRAZILIAN,
      age: 27,
    };

    const casino: Casino = {
      name: "Casino do Brasil",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilianUser]);
    expect(result.brazilians.allowed).toEqual(["Lucas"]);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("One american allowed in Brazil", () => {
    const americanUser: User = {
      name: "Peter",
      nacionality: NACIONALITY.AMERICAN,
      age: 19,
    };

    const casino: Casino = {
      name: "Casino do Brasil",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [americanUser]);
    expect(result.americans.allowed).toEqual(["Peter"]);
    expect(result.brazilians.allowed.length).toBe(0);
  });

  test("No one allowed in America", () => {
    const brazilianUser: User = {
      name: "Rodrigo",
      nacionality: NACIONALITY.BRAZILIAN,
      age: 19,
    };

    const americanUser: User = {
      name: "Connel",
      nacionality: NACIONALITY.AMERICAN,
      age: 19,
    };

    const casino: Casino = {
      name: "American Casino",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilianUser,
      brazilianUser,
      americanUser,
      americanUser,
    ]);
    expect(result.americans.unallowed).toEqual(["Connel", "Connel"]);
    expect(result.brazilians.unallowed).toEqual(["Rodrigo", "Rodrigo"]);
    expect(result.brazilians.unallowed).toContain("Rodrigo");
    expect(result.americans.unallowed).toContain("Connel");
  });

  test("Two americans allowed and two brazilians unallowed in America", () => {
    const brazilianUser: User = {
      name: "Mariana",
      nacionality: NACIONALITY.BRAZILIAN,
      age: 19,
    };

    const americanUser: User = {
      name: "Marianne",
      nacionality: NACIONALITY.AMERICAN,
      age: 21,
    };

    const casino: Casino = {
      name: "American Casino",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilianUser,
      brazilianUser,
      americanUser,
      americanUser,
    ]);
    expect(result.americans.allowed).toEqual(["Marianne", "Marianne"]);
    expect(result.brazilians.unallowed).toEqual(["Mariana", "Mariana"]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });
});
