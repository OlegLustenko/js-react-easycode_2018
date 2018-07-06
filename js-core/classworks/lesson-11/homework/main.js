/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__

 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных

 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *  */
const guest = {};
const user = {};
const admin = {
  email: 'www@example.com'
};
const database = {
  users: [],
  password: 'secret-password',
  registerGuest() {
    console.log('YOU ARE IN')
  }
};


guest.__proto__ = user;
user.__proto__ = admin;
admin.__proto__ = database;

guest.registerGuest();










