    //  startand todos
    class TodoStore {
        constructor() {
            this.todos = [];
        }
        get completedTodosCount() {
            return this.todos.filter(todo => todo.completed === true).length;
        }
        report() {
            if (this.todos.length === 0) return "<none>";
            return `Next todo: "${this.todos[0].task}". ` + `Progress: ${this.completedTodosCount}/${this.todos.length}`;
        }
        addTodo(task) {
            this.todos.push({
                task: task,
                completed: false,
                assignee: null
            });
        }
    }
    const todoStore = new TodoStore();
    todoStore.addTodo('read mobx');
    console.log(todoStore.report());