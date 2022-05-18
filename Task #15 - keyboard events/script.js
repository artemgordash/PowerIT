document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  input.addEventListener('blur', () => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(Number(input.value))) {
      input.value = '';
    }
  });
});
