/* https://goo.gl/Pb9Evw */

// const questions = ['question 1', 'question 2', 'question 3'];
// // по индексу
// const answers = [
//   ['answer 1', 'answer 2', 'answer 3'],
//   ['answer 1', 'answer 2', 'answer 3'],
//   ['answer 1', 'answer 2', 'answer 3'],
// ];

const questions = [
  {
    questionName: 'вопрос 1',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [1],
  },
  {
    questionName: 'вопрос 2',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [2],
  },
  {
    questionName: 'вопрос 3',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [1, 2],
  },
];

const app = {
  questions,
  testName: 'Тест по программированию',
  render() {
    let main = this.newEl('main');
    const testName = this.newEl('h1');
    testName.textContent = this.testName;
    const questionsList = this.newEl('ol');
    const button = this.newEl('button');
    button.textContent = 'Проверить';
    button.onclick = function () {
      /*
      * При нажатии на кнопку мы изменяем заголовок
      * у второго вопроса на "вопрос 999"
      * > questionsList
      * при нажатии во второй раз "вопрос 2"
      * */
      const header = questionsList
        .children[1] // li
        .children[0]; // h3

      const firstInput = questionsList
        .children[1] // li
        .lastChild
        .firstChild
        .firstChild; // h3

      const secondInput = questionsList
        .children[1] // li
        .lastChild
        .lastChild
        .firstChild; // h3

      const firstState = 'вопрос 999';

      header.textContent = header.textContent === firstState
        ? 'вопрос 2'
        : firstState;
      const secondInputs = questionsList.querySelectorAll('li:nth-child(2) > input[type="checkbox"]');
      const second = questionsList.querySelector('li:nth-child(2) > input[type="checkbox"]');

      [...secondInputs].forEach(input => {
        input.checked = !input.checked;
      });

      const questionsHeaders = questionsList.querySelectorAll('h3');
      [...questionsHeaders].forEach(header => {
        if (header.getAttribute('class') === 'active') {
          header.setAttribute('class', '');
        } else {
          header.setAttribute('class', 'active');
        }
      });
      console.log(questionsHeaders);
      /*
      *
      * Добавьте класс .active каждому заголовку вопроса
      * используйте querySelectorAll
      *
      *  */

    };

    /*
    *
    * this.renderQuestions()
    *
    * */
    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;

      const answers = this.newEl('ul');

      question.answers.forEach((answer, answerIndex) => {
        answers.appendChild(this.renderAnswer(answer, answerIndex));
      });

      li.appendChild(questionHeader);
      li.appendChild(answers);
      questionsList.appendChild(li);
    });

    main.appendChild(testName);
    main.appendChild(questionsList);
    main.appendChild(button);
    document.body.appendChild(main);
  },
  renderAnswer(answer, answerIndex) {
    const li = this.newEl('li');
    const label = this.newEl('label');
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    label.setAttribute('for', uniqId);
    label.textContent = answer;

    const input = this.newEl('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', uniqId);

    li.appendChild(input);
    li.appendChild(label);
    return li;
  },
  newEl(elName) {
    return document.createElement(elName);
  },
};

app.render();

function qwerrt(conditional) {
  let something;
  if (conditional === 'ACTIVE') {
    something = 'qwe';
  }
  if (conditional === 'INACTIVE') {
    something = 'asd';
  }
  if (conditional === 'DISABLED') {
    something = 'zxc';
  }
}
