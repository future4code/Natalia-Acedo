import * as fs from "fs";
import { UserAccount } from "./userAccount";
import { FileManager } from "./fileManager";

const balanceArg: number = Number(process.argv[2]);
const nameArg: string = process.argv[3];
const cpfArg: string = process.argv[4];
const ageArg: number = Number(process.argv[5]);

export class Bank {
  private accounts: UserAccount[];

  constructor() {
    this.accounts = this.getAllAccounts();
  }

  public getAllAccounts(): UserAccount[] {
    return JSON.parse(fs.readFileSync("accounts.json", "utf-8"));
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
      } catch (err) {
        console.error(err);
      }
    }
  }
  
  public getAccountByCpf(account: UserAccount): UserAccount[] {
    this.accounts.filter(eachAccount => {
       return console.log("Aqui está: ", eachAccount.getCpf())
        //return eachAccount.getCpf() = account.getCpf()
    })
    return 
  }
}

const newAccount = new UserAccount(balanceArg, nameArg, cpfArg, ageArg);
const newBank: Bank = new Bank();

//console.log(newBank.createAccount(newAccount));
//console.log(newBank.getAllAccounts());
console.log(newBank.getAccountByCpf(newAccount));