document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#delete').addEventListener('click', () => {
    document.querySelector('#child').remove();
  });
});
