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
    const data = await todoModel.getAllPromise();
    res.json(data);
  }

  createAction(req, res) {
    console.log(req.body);
    res.send();
  }
}

module.exports = new Controller();
