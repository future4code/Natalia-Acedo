import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ResidentialClient } from "./ResidentialClient"
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager";

const client: Client = {
  name: "Natália",
  registrationNumber: 8,
  consumedEnergy: 10,

  calculateBill: () => {
    return 2;
  },
};

console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculateBill());

const residence = new Residence(5, "02488001")
const commerce = new Commerce(15, "02488002")
const industry = new Industry(25, "02488003")

console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Natália", 8, 10, "123.456.789-10", 5, "02488001") 
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("MyCommerce", 13, 15, "99.999.999/9999-99", 15, "02488002") 
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("MyIndustry", 7, 10, 25, "02488003") 
clientManager.registerClient(industrialClient)

console.log(clientManager.calculateBillOfClient(7))

/* 
  1.
  a.  Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
  //Consegui imprimir todas as propriedades, isso aconteceu porque interfaces não tem encapsulamento.

  2.
  a. *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
  //"Cannot create an instance of an abstract class"

  b. *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
  //Criar uma subclasse da classe Place, e criar uma instância dessa subclasse.

  3. ok

  4. 
  a. Que métodos e propriedades essa classe possui? Por quê?
  //Todos os métodos e propriedade da classe Place e Residence, e da interface Client, porque ela herda essas características. Além disso, tem a propriedade cpf e o método getCpf próprios.

  5. 
  a. Quais as semelhanças dessa classe com a ResidentialClient?
  //Ambas possuem os métodos e propriedades da classe Place e da interface Client.

  b.  Quais as diferenças dessa classe com a ResidentialClient?
  //Ela possui as propriedades e métodos da classe Commerce e não possui da classe Client. Além disso, não tem a propriedade cpf e o getCpf(), e tem a propriedade cnpj e getCnpj()

  6.
  a. De qual classe a IndustrialClient deve ser filha? Por quê?
  //Da classe Industry, porque ela precisa da propriedade quantidade de máquinas para calcular a taxa de energia.
  
  b. *Que interface a `IndustrialClient` implementa? Por quê?*
  //A interface Client, porque ela precisa das propriedades e métodos definidos nesta interface.

  c. Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
  //O IndustrialClient não tem nenhuma propriedade para ser setada. 

  */
