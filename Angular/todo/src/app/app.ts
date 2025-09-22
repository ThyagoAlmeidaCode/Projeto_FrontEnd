import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListTarefas } from './components/list-tarefas/list-tarefas';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListTarefas, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Interface para definir a estrutura de uma tarefa


export class App {
  /* protected readonly title = signal('todo'); */
  
}
