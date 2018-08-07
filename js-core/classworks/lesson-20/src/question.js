const arr = [];
for (var i = 0; i < 5; i++) {
  (INDEXTOCALL => {
    arr.push(() => {
      console.log(INDEXTOCALL);
    });
  })(i);
}
// В конце цикла, i равняется 5.
// При вызове, функции мы получаем доступ к этой i

/*

 1. изменить var на let
 2. Сделать замыкание
 
*/
