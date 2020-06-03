/* 1.

a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
//Não, pois ela é privada. Não é possível imprimir apenas a senha (newUser.password) no terminal. A senha só será impressa no terminal caso todo o objeto seja passado para o console (console.log(newUser)) ou caso seja criado um método getPassword que retornará this.password.

Sim, o password da instância pode ser impresso no terminal. Mesmo sendo "private".

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//Apenas uma vez

*/


export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): void {
      console.log(`Olá, sou ${this.name}, bom dia!`)
  }


}

//const nataliaUser = new User("natalia_acedo", "natalia@gmail.com", "Natália", "123456");

//console.log("Natália User: ", nataliaUser)
