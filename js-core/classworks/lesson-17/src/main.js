var myDocument = document.createDocumentFragment();
const div = document.createElement('div');
div.textContent = 'qwerty';

myDocument.appendChild(div);

document.body.appendChild(myDocument);


document