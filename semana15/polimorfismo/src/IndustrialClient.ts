import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  static TAX_INDUSTRY: number = 0.45;

  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy  * IndustrialClient.TAX_INDUSTRY + this.machinesQuantity * 100
  }
}
