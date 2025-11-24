import { Component, signal } from '@angular/core';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { TodoListModels } from './shared/models/todo-list-models.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgForOf,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  private allTodos: TodoListModels[] = [
    { id: 1, title: 'Sample Todo', completed: false },
    { id: 2, title: 'Another Todo', completed: true },
    { id: 3, title: 'Third Todo', completed: false },
    { id: 4, title: 'Fourth Todo', completed: true },
  ];

  toDoList: TodoListModels[] = this.allTodos.filter((t) => !t.completed);
  completedList: TodoListModels[] = this.allTodos.filter((t) => t.completed);
  newTaskTitle= signal('');
  showAddTask = signal(false);
  trackById(index: number, item: TodoListModels): number {
    return item.id;
  }

  toggleChecked(id: number): void {
    const todoIndex = this.toDoList.findIndex((t) => t.id === id);
    if (todoIndex > -1) {
      const [todo] = this.toDoList.splice(todoIndex, 1);
      todo.completed = true;
      this.completedList = [...this.completedList, todo];
      return;
    }

    const compIndex = this.completedList.findIndex((t) => t.id === id);
    if (compIndex > -1) {
      const [todo] = this.completedList.splice(compIndex, 1);
      todo.completed = false;
      this.toDoList = [...this.toDoList, todo];
    }
  }
  addTask(): void {
    const title = this.newTaskTitle().trim();
    if (title) {
      const todo: TodoListModels = {
        id: Date.now(),
        title,
        completed: false,
      };
      this.newTaskTitle.set('');
      this.showAddTask.set(false);
      this.toDoList = [...this.toDoList, todo];
    }
  }
}
