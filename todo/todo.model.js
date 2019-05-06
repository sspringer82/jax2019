const Todo = require('./todo');

class TodoModel {
  constructor() {
    this.todos = [
      new Todo('Get up', true),
      new Todo('Eat', true),
      new Todo('🌛 and dream stuff 👻', false),
    ];
  }

  getAll(callback) {
    setTimeout(() => {
      const value = 'foo';
      callback(value);
    }, 1000);
  }
  getAllPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = [
          new Todo('Get up', true),
          new Todo('Eat', true),
          new Todo('🌛 and dream stuff 👻', false),
        ];
        resolve(value);
      }, 1000);
    });
  }
}

module.exports = new TodoModel();
