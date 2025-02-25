import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor, CommonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoList: TodoItem[] = [
    { id: 1, task: 'Task 1', completed: false },
    { id: 2, task: 'Task 2', completed: false },
    { id: 3, task: 'Task 3', completed: false },
  ];
  newTask: string = 'newTask123';
  formattedTodoList = '';

  constructor() {
    this.formattedTodoList = JSON.stringify(this.todoList, null, 5); // Formato con 5 espacios de indentación
  }

  getFormattedTodoList() {
    return JSON.stringify(this.todoList, null, 5);
  }

  addTask(newTask: string): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: newTask,
        completed: false,
      };
      this.todoList.push(newTodoItem);
      this.newTask = 'otherTask';
    }
  }

  toggleCompleted(index: number) {
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed;
    console.log(this.todoList);
  }

  deleteTask(id: number) {
    console.log(id)
    console.log(this.todoList)
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
