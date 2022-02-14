import { LightningElement, api } from "lwc";


export default class Oportunidade extends LightningElement {
   @api id;
   @api name;
   @api conta;
   @api amount;
   @api date;
}
