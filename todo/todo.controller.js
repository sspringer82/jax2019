const todoModel = require('./todo.model');

class Controller {
  getAction(req, res) {
    res.json(todoModel.todos);
  }
}

module.exports = new Controller();
