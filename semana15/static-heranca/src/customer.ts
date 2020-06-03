/* 2. 
a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
// Apenas uma.

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
//Uma vez.  
*/

/* 3.
a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//Não, porque na classe mãe a senha é privada, ou seja, só pode ser usada dentro da classe User.
*/

import { User } from "./index";

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const mayteCustomer = new Customer(
  "mayte_acedo",
  "mayte@gmail.com",
  "Maytê",
  "34562",
  "12345678-10"
);

console.log("Mayte:", mayteCustomer);
console.log("Id de Maytê:", mayteCustomer.getId());
console.log("Email de Maytê:", mayteCustomer.getEmail());
console.log("Nome de Maytê:", mayteCustomer.getName());
console.log("Valor da compra de Maytê:", mayteCustomer.purchaseTotal);
console.log("Cartão de crédito de Maytê:", mayteCustomer.getCreditCard());
mayteCustomer.introduceYourself()
