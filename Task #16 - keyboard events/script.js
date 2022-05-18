document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');

  input.addEventListener('keyup', () => {
    input.value = input.value.replace(/[^\d]/g, '');
  });
});
