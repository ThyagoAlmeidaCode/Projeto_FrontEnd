import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

@Component({
  selector: 'app-list-tarefas',
  imports: [FormsModule],
  templateUrl: './list-tarefas.html',
  styleUrl: './list-tarefas.css'
})
export class ListTarefas {

  // Array para armazenar as tarefas
  todos: Todo[] = [];
  
  // Variável para armazenar o texto da nova tarefa
  newTodoTitle: string = '';
  
  // Contador para gerar IDs únicos
  nextId: number = 1;

  // Método para adicionar uma nova tarefa
  addTodo(): void {
    if (this.newTodoTitle.trim() === '') {
      return; // Não adiciona se estiver vazio
    }
    
    const newTodo: Todo = {
      id: this.nextId++,
      title: this.newTodoTitle.trim(),
      completed: false
    };
    
    this.todos.push(newTodo);
    this.newTodoTitle = ''; // Limpa o campo de entrada
  }

  // Método para remover uma tarefa
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Método para marcar/desmarcar uma tarefa como concluída
  toggleTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  // Método para editar uma tarefa
  editTodo(id: number, newTitle: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo && newTitle.trim() !== '') {
      todo.title = newTitle.trim();
      todo.editing = false;
    }
  }

  // Método para cancelar a edição
  cancelEdit(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.editing = false;
    }
  }


}
