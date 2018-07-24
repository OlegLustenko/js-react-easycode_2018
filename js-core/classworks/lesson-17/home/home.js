/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [5, 4]

/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" следующее.
 *
 * 1.1
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * 1.2
 * Добавьте внизу цифры с текущим активным изображением.
 *
 *
 *
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */
class Carousel {
}
/*создайте новый instance Carouse при вызове initialize*/
var myInitializedCarousel = Carousel.initialize({
  elementToApply: '.carousel',
  infinity: true,
});

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})
/*
*
* <style>.fetch {
* background-color
* */

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */


/*
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> contacts.js !!!

Структура виртуализации:
 >------ Это 2 разных класса KeypadPage, ContactsPage  <-----

innerHTML по максимуму

https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась
в <span class="numbers">
*/

/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы,
таблица сортировалась по соответствующему свойству
*/
