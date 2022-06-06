document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector('textarea[name="text"]');
  textArea.value = localStorage.getItem('textAreaValue');
  const inputSubmit = document.querySelector('input[type="submit"]');
  textArea.addEventListener('keyup', () => {
    localStorage.setItem('textAreaValue', `${textArea.value}`);
  });
  inputSubmit.addEventListener('click', () => {
    textArea.value = '';
    localStorage.setItem('textAreaValue', `${textArea.value}`);
  });
});
