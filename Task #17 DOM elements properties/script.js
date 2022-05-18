document.addEventListener('DOMContentLoaded', () => {
  const elementDIV = document.querySelector('#elem');
  elementDIV.addEventListener('click', () => {
    // eslint-disable-next-line no-alert
    alert(`Width: ${elementDIV.clientWidth}, Height: ${elementDIV.clientHeight}`);
    elementDIV.style.cssText = `
    width: ${elementDIV.clientWidth * 2}px;
    height: ${elementDIV.clientHeight * 2}px;
    `;
  });
});
