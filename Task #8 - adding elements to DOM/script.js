document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button[type="submit"]').addEventListener('click', () => {
    const input = document.querySelector('input');
    if (input.value !== '') {
      document.querySelector('ol.list').appendChild(document.createElement('li'))
        .textContent = input.value;
      input.value = '';
    }
  });
  document.querySelector('ol.list').addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      alert(e.target.textContent);
    }
  });
});
