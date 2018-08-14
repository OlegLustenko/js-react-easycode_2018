class Model {
  constructor(initialState) {
    this.data = initialState;
  }

  addTodoItem(newItem) {
    if (!newItem) {
      return;
    }

    this.data.push(newItem);
  }

  removeItem(itemToRemove) {
    const itemInData = this.data.indexOf(itemToRemove);
    if (itemInData === -1) {
      return;
    }

    this.data.splice(itemInData, 1);
  }

  updateTodoItem(oldItem, newItem) {
    // 0) oldItem - имя TODO-элемента
    // 1) получили элемент который нужно обновить
    // 2) обновили этот элемент
    const itemInData = this.data.indexOf(oldItem);
    if (itemInData === -1) {
      return;
    }

    this.data.splice(itemInData, 1, newItem);
  }
}