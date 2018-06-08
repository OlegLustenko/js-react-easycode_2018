function qwe(a, b) {
  if (a > b) {
    return a
  }
  return b;
}

qwe(10, 50);

function qwe2(a, b) {
  return a > b ? a + 10 > b ? a - 10 : 0 : b;
}





function test(megaObject) {
  let isObject = megaObject.property ? megaObject.property.name : {};
  let isObject2 = megaObject.property.name || {};
  console.log(isObject)
  console.log(isObject2)
}