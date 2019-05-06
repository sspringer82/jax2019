const Todo = require('./todo');

class TodoModel {
  constructor() {
    this.todos = [
      new Todo('Get up', true),
      new Todo('Eat', true),
      new Todo('🌛 and dream stuff 👻', false),
    ];
  }
}

module.exports = new TodoModel();
