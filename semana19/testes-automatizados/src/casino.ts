export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

 export enum NACIONALITY {
  AMERICAN = "AMERICAN",
  BRAZILIAN = "BRAZILIAN",
}

export interface User {
  name: string;
  nacionality: NACIONALITY;
  age: number;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
    },
  };
}
