const todoModel = require('./todo.model');

class Controller {
  async getAction(req, res) {
    // variante 1: callback
    // todoModel.getAll(data => {
    //   res.json(data);
    // });
    // variante 2: promises
    //todoModel.getAllPromise().then(data => res.json(data));
    // variante 3: async/await
    const data = await todoModel.getAll();
    res.json(data);
  }

  async getOneAction(req, res) {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400);
      res.send('not found');
    } else {
      const todo = await todoModel.getOne(id);
      res.json(todo);
    }
  }

  async createAction(req, res) {
    const result = await todoModel.create(req.body);
    res.json(result);
  }
}

module.exports = new Controller();
