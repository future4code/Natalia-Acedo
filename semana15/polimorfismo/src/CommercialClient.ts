import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
  static TAX_RESIDENCE: number = 0.53;

  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  getCnpj(): string {
    return this.cnpj;
  }

  calculateBill(): number {
    return this.consumedEnergy * CommercialClient.TAX_RESIDENCE;
  }
}
