/*
Task 0
Напишите функцию которая будет складывать два числа.
Входные параметры всегда строка.
















solution('91', '19') expected: 110
solution('123456789', '987654322') expected:  1111111111
solution('999999999', '1') expected:  1000000000
solution('451982', '3588') expected:  455570
solution('92023', '556083') expected:  648106
solution('945521', '823864') expected:  1769385

solution('823094582094385190384102934810293481029348123094818923749817', '234758927345982475298347523984572983472398457293847594193837') expected:  1057853509440367665682450458794866464501746580388666517943654
solution('234859234758913759182357398457398474598237459823745928347538', '987429134712934876249385134781395873198472398562384958739845') expected:  1222288369471848635431742533238794347796709858386130887087383
solution('854694587458967459867923420398420394845873945734985374844444', '333333333333439439483948394839834938493843948394839432322229') expected:  1188027920792406899351871815238255333339717894129824807166673
solution('666666665656566666666565656666666656565666666665656566666666835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789', '464646464646464644646464646464646464646464646463463463463466') expected:  1131313130303031311313030303131313121212131313129120030130132
solution('987429134712934876249385134781395873198472398562384958739845234859234758913759182357398457398474598237459823745928347538835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789', '835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789')
expected: 1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327

*/


.
/*
Todo MVC - добавьте верстку любую. -> gh-pages
@Super-Front-END => рекомендую взять отсюда http://todomvc.com/

1. Переместите data в localStorage и инициализацию
View сделайте из localStorage;
// синхронизировать модель после изменения в модели

2. Добавьте возмозжность удаления элемента следуя паттерну MVC
3. Добавьте возможность редактирования элемента
СЛЕДУЯ ПРИНЦИПУ MVC.
/*
Cделать phone-book

у которого будет:

1) Вы заполните пользователей на сервер по адресу с вашими инициалами.
2) При загрузке приложения, вы получите пользователей с сервера
3) В приложении будет js - роутер, (при смене страницы перезагрузки не будет)
4) При нажатии на пользователя будет открываться данный пользователь
5) Будет возможность добавить пользователя на сервере заполнив данные в форме (add-contact)
----------------   ~90 балов

Для тех кто хочет +500$ к зарплате на старте

6) Добавить удаление пользователей (2)

7) Должна быть модульная структура и Проект должен собираться при помощи webpack(2) (!)
8) Проект должен транспайлится через babel последние 2 версии браузеров (2) (!)
9) и после публикации на gh-pages, должен быть минифицирован(2)
10) добавьте еще одну первую страницу на которой будет "auth"
в этот инпут можно ввести инициалы easycode студента (2)
в зависимости от этого будут загружаться разные пользователи












1) Планирование -->

Функциональные требования

 - Сортировка по имени
 - Пользователи получаются с сервера

История (story) - большая задача, техническая и может быть абстрактной

 Маленькие подзадачи к этой стори - У вас отдельный Pull Request

---------------


Story -> сделать страницу Contacts-Page

 - Делаете верстку -> html - 1h
 - сделать JS класс -> в котором будет render + верстка (вы должны проверить, что рисуется на
   странице корректно) - 1h

 - Написать API для запросов к серверу - 30min / 1h
    const contactsPageAPI = {
       getAllUsers() {
         ...
       }
    }
  {

[
   fullName: ...,
   phone: ...
   email: ...
  }
]

 - Интеграция API + рендер пользователей на странице 4h /
    1 method -> отображает
    <tr><td>{userName}</td><tr>
    <tr><td>{userSurname}</td><tr>
    <tr><td>{userEmail}</td><tr>

 -  (сохранить в App пришедших пользователей)
 -

 - Сделать сортировку пользователей при нажатии на header
   4h / 6h / 8h


 - Добавить фильтр(поиск) пользователей
   4h / 6h / 8h

 - Интегрировать роутер...
 - добавить навигацию при нажатии на пользователя




Стори ->
  Написать Роутер
    ---

   class Router {

     navigate(newPage) {
        this.setActivePage(newPage)
     }
   }



Стори App
class App {
 constructor() {
  this.router = new Router(state);

  this.pages = {
    contacts: new Contacts(state, this.router)
  }

 }

}


















































*/
