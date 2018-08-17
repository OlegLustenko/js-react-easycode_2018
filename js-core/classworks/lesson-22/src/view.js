class View {
  constructor(initialState) {
    this.elements = {
      addButton: document.querySelector('.controls__add'),
      input: document.querySelector('.controls__input'),
      listItems: document.querySelector('.list-items'),
    };
    if (initialState) {
      this.render(initialState);
    }
  }

  render(newData) {
    this.elements.listItems.innerHTML = newData.reduce((todoItems, todo) => {
      return todoItems + `<li>${todo}</li>`;
    }, '');
  }
}
