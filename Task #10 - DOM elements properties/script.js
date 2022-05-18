document.addEventListener('DOMContentLoaded', () => {
  const fieldDIV = document.querySelector('#field');
  const ballDIV = document.querySelector('#ball');

  ballDIV.style.cssText = `
    top: ${fieldDIV.clientHeight / 2 - ballDIV.clientHeight / 2}px;
    left: ${fieldDIV.clientWidth / 2 - ballDIV.clientWidth / 2}px;
  `;
});
