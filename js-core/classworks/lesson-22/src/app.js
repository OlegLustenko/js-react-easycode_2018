(function () {
  const initialState = [
    'learn JavaScript',
    'learn MVC',
    'read book OOP',
  ];

  const model = new Model(initialState);
  const view = new View(initialState); // запрос на сервер
  const view2 = new Viewfgh(initialState); // запрос на сервер
  const view3 = new Viewfgh2(initialState); // запрос на сервер

  const controller = new Controller(model, view2);
})();
