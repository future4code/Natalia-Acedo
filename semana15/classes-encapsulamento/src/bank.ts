import { UserAccount } from "./userAccount";
import { FileManager } from "./fileManager";

const balanceArg: number = Number(process.argv[2]);
const nameArg: string = process.argv[3];
const cpfArg: string = process.argv[4];
const ageArg: number = Number(process.argv[5]);

export class Bank {
  private accounts: UserAccount[];

  constructor() {
    this.accounts = [];
  }
  
  public createAccount(account: UserAccount): void {
      
    if (account.getAge() < 18) {
      console.log("Você precisa ter mais de 18 anos para criar uma conta");
    } else {
      try {
        this.accounts.push(account);

        const fileManager = new FileManager("accounts.json");

        fileManager.writeToJson(this.accounts);

        console.log("Conta criada com sucesso");
        console.log(account)
      } catch (err) {
        console.error(err);
      }
    }
  }
}

const newAccount = new UserAccount(balanceArg, nameArg, cpfArg, ageArg);
const newBank: Bank = new Bank()

console.log(newBank.createAccount(newAccount))