class Todo {
  constructor(id, title, status) {
    this.id = id;
    this.title = title;
    this.status = status;
  }

  toggleStatus() {
    this.status = !this.status;
  }
}
module.exports = Todo;
