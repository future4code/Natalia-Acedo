/* 
a. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//Uma vez.
b. *Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?*
//Todas, menos menos o password.
*/



import { User } from "./index";

export class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;
  static BENEFITS_VALUE: number = 400

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary():number {
    return this.baseSalary + Employee.BENEFITS_VALUE
  }
}

const nataliaEmployee = new Employee("natalia_acedo", "natalia@gmail.com", "Natália", "123456", "25/07/2020", 4000)
console.log(nataliaEmployee.calculateTotalSalary())