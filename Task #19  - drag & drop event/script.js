document.addEventListener('DOMContentLoaded', () => {
  let dragged;
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.id === 'ball') {
      dragged = document.querySelector(`#${e.target.id}`);
    }
  });
  document.addEventListener('drop', (e) => {
    if (e.target.id === 'parent-left' || e.target.id === 'parent-right') {
      document.querySelector(`#${e.target.id}`).append(dragged);
    }
  });
});
