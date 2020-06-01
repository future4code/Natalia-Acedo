export class UserAccount {
    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
  
    constructor(
      balance: number = 0,
      cpf: string,
      name: string,
      age: number,
    ) {
      this.balance = balance;
      this.cpf = cpf;
      this.name = name;
      this.age = age;
    }

    public getAge(): number {
        return this.age
    }


    public getBalance(): number {
      return this.balance
    }
  
    public addBalance(): void {
      //Aqui deve ser inserida a lógica de adicionar saldo
      console.log("Saldo atualizado com sucesso");
    }
  }
  