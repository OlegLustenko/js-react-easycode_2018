function Controller(model, view) {
  this.model = model;
  this.view = view;
  this.init();
}

const fakeServerRequest = (data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 4000);
  });
};

Controller.prototype.init = function () {
  this.addHandlerForAddTask();
  fakeServerRequest(this.model.data).then(todos => {
    this.view.render(todos);
  });
  this.handlerForAddTask = this.handlerForAddTask.bind(this);
};

Controller.prototype.addHandlerForAddTask = function () {
  // Получить значение из инпута в VIEW
  const {
    input,
    addButton, // Получить кнопку к которой нужно добавить событие VIEW
  } = this.view.elements;

  addButton.addEventListener('click', this.handlerForAddTask);

  /*
  * 1) Получить значение из инпута в VIEW
  * 2) Получить кнопку к которой нужно добавить событие VIEW
2.5) Создать обработчик события который будет добавлять значение в модель
  * 3) Повесить событие на кнопку
  * 4) Положить значение в model
  * 5) вызвать рендер с новым state у view
  * */
};

Controller.prototype.handlerForAddTask = function () {
  console.log(this);
  const {
    input,
  } = this.view.elements;

  if (!input.value) {
    return;
  }

  this.model.addTodoItem(input.value);
  this.view.render(this.model.data);

  // default value
  input.value = '';
};