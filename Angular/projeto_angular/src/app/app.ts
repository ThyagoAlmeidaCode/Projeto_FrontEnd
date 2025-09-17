import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*  protected readonly title = signal('projeto_angular');
  */

  titulo = "Apredendo Angular";

  imagem: string = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";


  descricao: string = "O data binding pega uma informação no arquivo .ts e leva para o arquivo .html";
  msgDois: string = "Event Binding";
  descricaoDois: string = "O event binding pega uma informação no arquivo .hmtl e leva para o arquivo .ts";

  pessoa = {
    nome: "Matheus",
    idade: 18
  }

  /* Fala de ngif com encima do objto */

  pessoaCaixa = [
    {nome:  "Maria Silva", idade: 23, altura: 1.70},
    {nome: "Leo dos Anjos", idade: 56, altura: 1.80},
    {nome: "Gabi Alves", idade: 17, altura: 1.60}
  ];



  /* Metodo botao */
  controle = true;
  clicou(){
    //Melhoria de código - operador ternario

    this.controle ? this.titulo = "Agora sou sou ternario" : this.titulo = "Data Binding";
    this.controle ? this.imagem = "https://cdn.pixabay.com/photo/2023/06/24/15/04/dragonfly-8085413_640.jpg" : this.imagem = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";

    return this.controle = !this.controle;

     /*  if(this.controle){
        //Altera a imagem
        this.controle = !this.controle;
        this.titulo = "Agora eu mudei";
        this.imagem = "https://cdn.pixabay.com/photo/2023/06/16/13/30/md500-8068034_640.jpg";
      }else{

        //Restaura a imagem anterior
        this.controle = !this.controle;
        this.titulo = "Data Binding";
        this.imagem = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";

      } */
  }
}