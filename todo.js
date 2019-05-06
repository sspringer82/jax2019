class Todo {
  constructor(title, status) {
    this.title = title;
    this.status = status;
  }

  toggleStatus() {
    this.status = !this.status;
  }
}
module.exports = Todo;
