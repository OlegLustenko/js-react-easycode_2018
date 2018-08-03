alert(10);




const box = document.querySelector('.box');

box.addEventListener('mousedown', (_event) => {
  console.log('MOUSE DOWN');
  box.style.backgroundColor = 'red';

  const mousemove = (event) => {
    const centerWidth = box.offsetWidth / 2;
    const centerHeight = box.offsetHeight / 2;
    box.style.left = event.pageX - centerWidth + 'px';
    box.style.top = event.pageY - centerHeight + 'px';
  };

  const mouseup = (event) => {
    box.style.backgroundColor = 'blue';
    box.removeEventListener('mousemove', mousemove);
    box.removeEventListener('mouseup', mouseup);
  };

  box.addEventListener('mousemove', mousemove);
  box.addEventListener('mouseup', mouseup);
  box.ondragstart = () => false;
});

box.addEventListener('contextmenu', e => {
  e.preventDefault();
});

// box.addEventListener('mouseenter', event => {
//   console.log('mouse enter');
// });
//
// box.addEventListener('mouseenter', event => {
//   console.log('mouse enter');
// });

box.addEventListener('keydown', (event) => {
  console.log('KEYDOWN');
});
box.addEventListener('keypress', (event) => {
  console.log('KEYPRESS');
});
box.addEventListener('keyup', (event) => {
  console.log('KEYUP');
});

window.addEventListener('load', () => {
  console.log('Я СДЕЛАЛЪ');
});

window.onbeforeunload = () => false;

www.addEventListener('focus', () => {
  box.style.backgroundColor = 'green';
});

www.addEventListener('blur', () => {
  box.style.backgroundColor = 'yellow';
});



