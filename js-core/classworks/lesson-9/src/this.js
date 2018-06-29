var bar = 'global';

function foo(a, b, c) {
  console.log(a, b, c);
  console.log(this.bar);
}

var obj1 = {
  bar: 'это мой контекст',
  foo: foo
};

var obj2 = {
  bar: 'Привет объект 2'
};

foo(); // global
obj1.foo(); // obj1.bar - это мой контекст

foo.call(obj2, 1, 2, 3); //obj2.bar - 'Привет объект 2'
foo.apply(obj2, [10, 20, 30]); //obj2.bar - 'Привет объект 2'

var www = foo.bind(obj2);

function User(name) {
  this.name = name;
}

const legolas = new User('Legolas');
/* {name: 'legolas'} */

const cafe = {
  name: 'Мир средиземье',
  fruits: ['apple', 'orange', 'арбуз'],
  showFruits() {
    console.log(this.fruits);
  },
  partners: [
    {
      name: 'Фродо',
      fruits: ['хлебцы', 'капусту']
    },
    {
      name: 'Боромир',
      fruits: ['яблоки', 'киви']
    },
    {
      name: 'Гендальф',
      fruits: ['Манго', 'Банан']
    }
  ],
  showPartnersFruits() {
    this.partners.forEach(elem => {
      this.showFruits.call(elem);
    });
    /*
  Отобразите фрукты партнеров Мир средиземье,
  используя метод showFruits внутри
  showPartnersFruits
  * */
  }
};

cafe.showFruits();
cafe.showPartnersFruits();

/*
* Добавьте метод который будет отображать
* фрукты в консоле
*
* */

const teacher = {
  teacherName: 'Alla Ivanovich'
};

const abstractStudent = {
  someMagic() {
    console.log('йо хо хо хо');
  }
};

function createStudent(name) {
  const student = {};
  student.name = name;
  abstractStudent.__proto__ = teacher;
  student.__proto__ = abstractStudent;
  return student;
}

const students = [];
for (let i = 0; i < 30; i++) {
  const newStudent = createStudent(`student ${i + 1}`);
  students.push(newStudent);
}
console.log(students[0].teacherName); // Alla Ivanovich
teacher.teacherName = 'Boris Petrovich';
console.log(students[0].teacherName); // Boris Petrovich
