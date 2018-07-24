/*
* document.querySelector - первое совпадение
* document.querySelectorAll - все совпадения
* document.getElementById - принимает 1 аргумент ID элемента
* и возвращает его
*
* [
*  'green',
*  'yellow',
*  'red'
* ]
* */

const next = document.getElementById('next');

console.log(app);
console.log(next);

next.onclick = function() {
  const {style} = next;

  if (style.backgroundColor === 'green') {
    style.backgroundColor = 'yellow';
  } else {
    style.backgroundColor = 'green';
  }
};

const arr = ['red', 'yellow', 'red', 'red', 'green'];
next.style.position = 'relative';

let counter = 0;
setInterval(() => {
  next.style.backgroundColor = arr[counter];
  counter++;
  if (counter === arr.length) {
    counter = 0;
  }

  const newWidth = parseInt(getComputedStyle(next).left) + 1;
  next.style.left = newWidth + 'px';
}, 10);




/*
* Увеличивайте ширину next на 10px каждые 500мс
* */

/*
*
* по нажатию на next, изменяйте его цвет на зеленый
* по нажатию во вторый раз на желтый
*
* используйте свойство style
* */

/*
 *
 * Напишите функцию которая будет изменять цвет каждые 1 секунды
 * на желтый, а потом на зеленый
 *
 *
 * */
