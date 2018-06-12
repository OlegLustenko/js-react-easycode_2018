function sum(num) {
  let counter = 0;
  // num == 5
  while (num > 0) {
    // Iteration 1: num == 5
    // Iteration 2: num == 4
    // Iteration 3: num == 3
    // Iteration 4: num == 2
    // Iteration 5: num == 1
    counter = counter + num; // 5 + 4 + 3 + 2 + 1
    num = num - 1;
    // End of Iteration 1 -> num == 4;
    // End of Iteration 2 -> num == 3;
  }
  return counter;
}

function sumRecursive(num) {
  // бесконечный цикл
  if (num <= 0) {
    return num;
  }

  const newNumber = num + sumRecursive(num - 1); // 1

  return newNumber;
}

console.log(sumRecursive(5));

// Вниз

// Вверх

// console.log(sum(5)); // 5 + 4 + 3 + 2 +1
// sum(6); // 6 + 5 + 4 + 3 + 2 +1
// 10;

// const arr = [1, 2, 3, 4, 5];
//
//
// function recursiveLoop(arr) {
//   const head = arr[0];
//
//
// }
//
// recursiveLoop(arr);