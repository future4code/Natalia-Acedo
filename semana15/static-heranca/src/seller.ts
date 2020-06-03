/* 8.
a. *Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor, pois quando **não colocamos um construtor na classe filha**, ela **herda** o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?*
//A quantidade de vendas que eles já realizaram


b. *Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?*
//Todas menos o password, porque é uma instância privada da classe User e não há nenhum método que retorna o password.


9.
a.Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
//Não, porque salesQuantity é uma propriedade privada. 

10.
a. *Crie um novo vendedor. Atribua a ele um valor para a `salesQuantity`. Convoque a função `calculateTotalSalary` e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?*
// Ele retorna um novo valor de total de salário, adicionando a comissão de vendas. Isso acontece porque sobrescrevi a função calculateTotalSalary de employee.
*/

import { Employee } from "./employee";

export class Seller extends Employee {
  static SELLING_COMMISSION: number = 5;
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password, admissionDate, baseSalary);
  }

  private salesQuantity: number = 0;

  public setSalesQuantity(quantity: number): number {
    return (this.salesQuantity = quantity);
  }

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Seller.BENEFITS_VALUE + Seller.SELLING_COMMISSION * this.salesQuantity;
  }
}

const nataliaSeller = new Seller(
  "natalia_acedo",
  "natalia@gmail.com",
  "Natália",
  "123456",
  "25/07/2020",
  4000
);
/* console.log(nataliaSeller.getId());
console.log(nataliaSeller.getEmail());
console.log(nataliaSeller.getName());
console.log(nataliaSeller.getAdmissionDate());
console.log(nataliaSeller.getBaseSalary());
console.log(nataliaSeller.calculateTotalSalary()); */
console.log(nataliaSeller.setSalesQuantity(2));
console.log(nataliaSeller.calculateTotalSalary());
