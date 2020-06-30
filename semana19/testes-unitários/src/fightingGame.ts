export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.defense === undefined ||
    input.strength === undefined
  ) {
    return false;
  }

  if (
    input.life === null ||
    input.defense === null ||
    input.strength === null
  ) {
    return false;
  }

  if (input.life < 0 || input.defense < 0 || input.strength < 0) {
    return false;
  }

  return true;
};

export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid Character");
  }

  if (attacker.strength > defender.defense) {
    return (defender.life -= attacker.strength - defender.defense);
  }
};

export const performAttackInvertionOfControl = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid Character");
  }

  if (attacker.strength > defender.defense) {
    return (defender.life -= attacker.strength - defender.defense);
  }
};
