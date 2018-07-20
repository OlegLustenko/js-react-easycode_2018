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
