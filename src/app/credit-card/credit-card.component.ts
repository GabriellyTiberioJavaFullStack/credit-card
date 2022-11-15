import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  @Input()
  dadosCartao: CartaoDeCredito = {
    ano: '40',
    mes: '06',
    cvc: '123',
    nome: 'Mc Daleste',
    numero: '1234 5678 3456 7890'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
