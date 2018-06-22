function checkNumber(a) {
  if (a === 2) {
    // Тогда это
  } else if (a === 10) {
    // Или это
  } else if (a === 42) {
    // Или вот это
  } else {
    // Если ничего не прошло, тогда это
  }
}

function checkNumber2(a) {
  switch (a) {
    case 2:
      console.log(2);
      break;
    case 10:
      console.log(10);
      break;
    case 42:
      console.log(42);
      break;
    default:
      console.log('WEQWEQWEQW');
  }
}

const pseudoArray = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3
};

const array = [1, 2, 3];

for (let i = 0; i < pseudoArray.length; i++) {
  const elem = pseudoArray[i];

  console.log(elem);
}

/* arguments */

/* ES7 -> */
function add(...args) {
  return args.reduce(function(previousValue, number) {
    return previousValue + number;
  }, 0);
}

add(1, 2, 3); // 6
add(10, 20, 30); // 60
add(10, 20); // 30
add(10, 20, 10, 10, 10, 10, 10, 10, 10); // 100

const user = {
  id: 10,
  country: 'Thailand',
  email: 'example@example.com',
  cars: {
    id: 20,
    name: ['bmw', 'VAZ', 'mercedes', 'AUDI'],
    vendors: {
      addresses: ['google', 'yahoo']
    }
  }
};

/*
* Написать функцию которая принимает любой объект и возвращает его копию,
* Вам нужно скопировать объект!
* */

function copyObject(obj) {
  const newObj = {};
  // for (let key in obj) {
  //   console.log(key);
  //   if (Array.isArray(obj[key])) {
  //     newObj[key] = [...obj[key]];
  //     continue;
  //   }
  //   newObj[key] = obj[key];
  // }

  // copy 1 level
  /* deep - copy */
  /*  return Object.assign({}, obj, {
      cars: [...obj.cars]
    });
    */

  return {
    ...obj,
    cars: {
      ...obj.cars,
      name: [...obj.cars.name],
      vendors: {
        ...obj.cars.vendors,
        addresses: [...obj.cars.vendors.addresses]
      }
    }
  };
}

const newUser = copyObject(user);
newUser.cars.push('toyota');

// console.log(user);
/* -> 'Thailand' */
// console.log(newUser);
/* -> 'India' */
