const Todo = require('./todo');

const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db.sqlite3');

class TodoModel {
  constructor() {
    this.todos = [
      new Todo(1, 'Get up', true),
      new Todo(2, 'Eat', true),
      new Todo(3, '🌛 and dream stuff 👻', false),
    ];
  }

  getAll(callback) {
    return new Promise((resolve, reject) => {
      db.all('SELECT * from Todo', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    // return Promise.resolve(this.todos);
  }

  getOne(id) {
    const todo = this.todos.find(todo => todo.id === id);
    return Promise.resolve(todo);
  }

  create(todo) {
    const id = Math.max.apply(null, this.todos.map(todo => todo.id)) + 1;
    const newTodo = { ...todo, id };
    this.todos.push(newTodo);
    return Promise.resolve(newTodo);
  }
}

module.exports = new TodoModel();
