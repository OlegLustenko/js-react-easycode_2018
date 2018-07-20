const questions = [
  {
    questionName: 'вопрос 1',
    answers: ['answer 1.1', 'answer 1.2', 'answer 1.3'],
    correctAnswersIndexes: [1]
  },
  {
    questionName: 'вопрос 2',
    answers: ['answer 2.1', 'answer 2.2', 'answer 2.3'],
    correctAnswersIndexes: [2]
  },
  {
    questionName: 'вопрос 3',
    answers: ['answer 3.1', 'answer 3.2', 'answer 3.3'],
    correctAnswersIndexes: [1, 2]
  }
];
/*
*
* Все вопросы в DOM
* проходимся по каждому вопросу
* questions[DOMIndexQuestion]
* labelIndex
*
* */
// label - 'answer 1.2'
// question.correctAnswers.includes(label) -- CORRECT

const findCorrectAnswer = answerToValidate => {
  let correctAnswers = questions.map(question =>
    question.correctAnswersIndexes.map(answerIndex => {
      return question.answers[answerIndex];
    })
  );
  // correctAnswersIndexes: [1] before
  // correctAnswersIndexes: ['answer 1.2'] after

  return correctAnswers.some(answer => {
    return answer.includes(answerToValidate);
  });
};

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
    button.onclick = function() {
      console.log('привет')
    };

    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;

      const answers = this.newEl('ul');

      question.answers.forEach((answer, answerIndex) => {
        answers.innerHTML += this.renderAnswer(answer, answerIndex);
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
    /*
    * давайте перепишем на innerHTML;
    *
    * */
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    return `
           <li>
            <input type="checkbox" id="${uniqId}" /> 
            <label for="${uniqId}">${answer}</label>
           </li>
    `;
    // const li = this.newEl('li');
    // const label = this.newEl('label');
    // const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    // label.setAttribute('for', uniqId);
    // label.textContent = answer;
    //
    // const input = this.newEl('input');
    // input.setAttribute('type', 'checkbox');
    // input.setAttribute('id', uniqId);
    //
    // li.appendChild(input);
    // li.appendChild(label);
    // return li;
  },
  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render();

const button = document.createElement('button');
button.textContent = 'check answers';
button.onclick = () => {
  const labels = document.querySelectorAll('label');

  [...labels].forEach(label => {
    const newSpan = document.createElement('span');
    const labelStatus = findCorrectAnswer(label.textContent)
      ? 'CORRECT'
      : 'INCORRECT';
    newSpan.textContent = labelStatus;
    label.parentElement.insertBefore(newSpan, label);
  });
};
document.body.appendChild(button);

const main = document.querySelector('.main');
const span = document.createElement('span');
span.textContent = 'SPAN';

main.parentElement.insertBefore(span, main);

const body = document.body;

main.insertAdjacentHTML('beforeend', '<h1>QWER</h1>');
main.insertAdjacentElement('afterbegin', button);

const button2 = document.createElement('button');
button2.textContent = 'CRUSH THE BODY';
button2.onclick = () => {
  body.innerHTML = body.innerHTML + '<h1>HELLO WORLD</h1>';
};
body.appendChild(button2);
console.log(main.outerHTML);

// перед всем контентом внутри тэга main!
