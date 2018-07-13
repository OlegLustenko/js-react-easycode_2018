var myRegularExpression = /i-love/;

myRegularExpression.test('i-love');

var newRegExp = new RegExp('some');

console.log(newRegExp.test('some'));

const testABC = /abcdefgh/;

var testABC2 = /[a-z]/;

/*
* напишите функцию которая будет проверять
* является ли переданный аргумент словом 'JavaScript'
* нужно использовать регулярные выражения
* */

// the silence
const checkJavaScript = str => /JavaScript/.test(str);

const superJavaScript = 'JavaScript IS IS is is awesome';

console.log(superJavaScript.replace(/is/gim, ''));

const removeExtraIs = (str, softVersion) => {
  const mySecret = '%_%_%_%';
  return str
    .replace(/is/i, mySecret) // заменяю на секрет
    .replace(/is /gim, '')
    .replace(mySecret, softVersion);
};

console.log(removeExtraIs(superJavaScript, '0.10.1'));

/*

Напишите функцию которая принимает аргумент checkJavaScript
и оставляет 1 is

-> 'JavaScript is awesome' */

class ServerError extends Error {
};

class AuthenticationError extends Error {
};

try {
  // -> запрос на логин
  // ... connection problem
  // -> запрос на получение аватарки
} catch (error) {
  // ->
  console.dir(error);
} finally {
  // -> пользователь успешно подключился
}
