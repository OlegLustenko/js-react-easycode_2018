// @flow
const app = {
  appName: 'Тест по программированию',
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: 'Вопрос 2',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: 'Вопрос 3',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    } // приходят с сервера
  ],

  createLi() {
    return this.new('li');
  },
  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new('label');
    label.textContent = answer;
    const input = this.new('input');
    input.setAttribute('type', 'checkbox');
    liAnswer.appendChild(input);
    console.log(input.getAttribute('type'));
    liAnswer.appendChild(label);
    return liAnswer;
  },
  render() {
    const body = document.body;
    // 1. Создаем main
    // 2. Создаем вопросы -> ol
    // 3. Создаем ответы -> h3 + li*3
    const main = this.new('main');
    const h1 = this.new('h1');
    h1.textContent = this.appName;
    const ol = this.new('ol');

    main.appendChild(h1);
    main.appendChild(ol);

    this.questions.forEach(question => {
      const li = this.createLi();
      const h3 = this.new('h3');
      h3.textContent = question.name;
      const ul = this.new('ul');
      question.answers.forEach(answer => {
        /* ---------------------------- */
        const htmlAnswer = this.createAnswer(answer);
        /* ---------------------------- */
        ul.appendChild(htmlAnswer);
      });
      li.appendChild(h3);
      li.appendChild(ul);
      ol.appendChild(li);
    });
    body.appendChild(main);
  },
  new: function(tag: string): HTMLElement {
    return document.createElement(tag);
  }
};

app.render();
