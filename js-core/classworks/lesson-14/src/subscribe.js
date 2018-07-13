function Module() {
  let myName = 'Oleg';
  let state = [];

  const subscribe = fn => {
    state.push(fn);
  };

  const listen = action => {
    state.forEach(service => {
      service(action);
    });
  };

  return { subscribe, listen };
}

var service = Module();

service.subscribe(() => {
  console.log('qwerty');
});

service.listen();
