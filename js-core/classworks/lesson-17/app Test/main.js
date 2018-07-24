const app = {
  testName: 'Тесты по программированию',
  ol: document.createElement('ol'),
  questions: [
    { name: 'Вопрос 1', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] }, // прилетает с серверва
    { name: 'Вопрос 2', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] }, // прилетает с серверва
    { name: 'Вопрос 3', answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'] } // прилетает с серверва
  ],
  questionHeader(question) {
    const li = this.new('li');
    const h2 = this.new('h2');
    const ul = this.new('ul');
    h2.textContent = question.name;
    
    if ( question.id == 1 ) {
      h2.id = 'newId'
    }
    
    li.append(h2, ul);
    this.ol.append(li);
    return ul;
  },
  render() {
    const body = document.body;
    const main = this.new('main');
    const header = this.new('h1');
    header.id = 'privet';
    const button = this.new('button');
    const button2 = this.new('button');
    const button3 = this.new('button');
    button.textContent = 'Some button';
    button2.textContent = 'asd button';
    button3.textContent = 'add answer 0';
    
    header.textContent = this.testName;
    
    this.questions.forEach((question, index) => {
      console.log(index);
      const name = question.name;
      if ( index == 1 ) {
        question.id = index;
      }
      const ul = this.questionHeader(question);
      
      question.answers.forEach(answer => {
        const li = this.new('li');
        const input = this.new('input');
        const label = this.new('label');
        input.setAttribute('type', 'checkbox');
        
        label.textContent = answer;
        li.append(input, label);
        
        ul.append(li);
      })
    });
  
    main.append(header);
    main.append(this.ol);
    main.append(button, button2, button3);
    body.append(main);
    
   
  },
  new(elemName) {
    return document.createElement(elemName);
  }
}

app.render();


//const allNodes = document.querySelectorAll('*');

// for(let i =0;i<allNodes.length; i++) {
//   const elem = allNodes[i];
//   if(elem.textContent) {
//     console.log(elem.textContent);
//   }
// }

//for (let i = 0; i < allNodes.length; i++) {
//  const elem = allNodes[i];
//  if ( elem.tagName == 'H2' ) {
//    console.log(elem.textContent);
//  }
//}


// 1. Получить все элементы ul на странице;
const ul = document.querySelectorAll('ul'); // псевдо-массив
// 2. Начать перебор элементов в цикле;

for (let i = 0; i < ul.length; i++) {
  const singleUl = ul[i];
  //let textNode = document.createElement('h1');
  //textNode.textContent = 'hello';
  
  singleUl.prepend('Ответ 0')
}


// 3. Вначале каждого элемента добавить 'Ответ 0';
