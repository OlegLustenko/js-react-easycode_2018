'use strict';
let book1 = {
  name: 'Learn Ruby',
  pages: 200,
  showPages: showPages,
};
let book2 = {
  name: 'Be a pro in JavaScript',
  pages: 10,
  showPages: showPages,
};

function showPages() {
  console.log(this.pages);
}

/*
 Напишите функцию которая будет отображать количество
 страниц в книге, данную функцию можно будет вызвать как
 для объекта book1 так и для объекта book2
 */
