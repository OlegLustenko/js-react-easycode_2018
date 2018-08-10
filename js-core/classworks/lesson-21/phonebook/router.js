const content = document.querySelector('.content');

const links = document.querySelectorAll('a');

const updateView = state => {
  content.innerHTML = state;
};

links.forEach(link => {
  const href = link.getAttribute('href');

  link.addEventListener('click', event => {
    event.preventDefault();
    const newContent = href + 'WWWWWWW';
    updateView(newContent);

    window.history.pushState(newContent, href, href);
  });
});

window.addEventListener('popstate', event => {
  updateView(event.state);
});
