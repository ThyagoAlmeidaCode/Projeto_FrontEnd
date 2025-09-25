import { Component } from "@angular/core";

@Component({
    selector: 'app-carrinho', /* Apelido para o componente */
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {
    title = 'Meu Carrinho de Compras';
}