document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach((el) => {
    if (el.href.includes('https://')) {
      el.style.color = 'red';
    }
  });
});
