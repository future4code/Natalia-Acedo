import {
  Character,
  validateCharacter,
  performAttackInvertionOfControl,
} from "../src/fightingGame";

describe("Testing validateCharacter", () => {
  test("Should return false for empty name", () => {
    const character: Character = {
      name: "",
      life: 1500,
      defense: 10,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for empty life", () => {
    const character: Character = {
      name: "Chun-Li",
      life: null,
      defense: 10,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for empty defense", () => {
    const character: Character = {
      name: "Riu",
      life: 1500,
      defense: undefined,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for empty strength", () => {
    const character: Character = {
      name: "Riu",
      life: 1500,
      defense: 10,
      strength: null,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for negative value", () => {
    const character: Character = {
      name: "Riu",
      life: -50,
      defense: 10,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBeFalsy();
  });

  test("Should return true for life 0", () => {
    const character: Character = {
      name: "Riu",
      life: 0,
      defense: 10,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBeTruthy();
  });

  test("Should return true for all valid inputs", () => {
    const character: Character = {
      name: "Riu",
      life: 1500,
      defense: 10,
      strength: 20,
    };

    const result = validateCharacter(character);
    expect(result).toBeTruthy();
  });
});

describe("Testing performAttack", () => {
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 280,
      strength: 490,
    };

    const defender: Character = {
      name: "Ryu",
      life: 1500,
      defense: 290,
      strength: 480,
    };

    performAttackInvertionOfControl(attacker, defender, validatorMock);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Chun-Li",
      life: 1500,
      defense: 280,
      strength: 490,
    };

    const defender: Character = {
      name: "Ryu",
      life: undefined,
      defense: 290,
      strength: 480,
    };

    try {
      performAttackInvertionOfControl(attacker, defender, validatorMock);
    } catch (err) {
      expect(err.message).toBe("Invalid Character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });




});