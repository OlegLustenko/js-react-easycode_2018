let someNumber = 0;

// setInterval(() => {
//   // console.log(Math.random() * 10);
//   let num = Math.random() * 10;
//   console.log(num);
//   if (num > 3) {
//     someNumber = ':DADADA';
//     // debugger;
//   } else {
//     someNumber = 100;
//   }
//   try {
//     console.log(someNumber.split(''));
//   } catch (e) {
//     console.log(e);
//     console.log('эй что то у тебя не так в коде !');
//   }
// }, 60000);

// try {
// } catch (e) {
//   console.log(e);
//   console.log('эй что то у тебя не так в коде !');
// }
let state;
try {
  throw new ServerError('qweqwe');
  if (serverSuccess) {
    state = 'ok';
  }
} catch (error) {
  console.log(error);
  state = 'fail';
} finally {
  console.log('qwerty')
}
