(function () {
  const initialState = [
    'learn JavaScript',
    'learn MVC',
    'read book OOP',
  ];

  const model = new Model(initialState);
  const view = new View(); // запрос на сервер

  const controller = new Controller(model, view);
})();
