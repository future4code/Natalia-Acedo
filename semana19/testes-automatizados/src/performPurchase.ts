export interface User {
  name: string;
  balance: number;
}

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  } else {
    return undefined;
  }
}


console.log(performPurchase({name: "Natália", balance: 15}, 15))