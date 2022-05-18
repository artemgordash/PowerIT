document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.board').style.cssText = `
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(8, 50px);
    `;

  document.querySelectorAll('.column').forEach((el) => {
    el.style.cssText = `
      display: grid;
      grid-template-rows: repeat(8, 50px);
    `;
  });

  document.querySelectorAll('.board div:nth-child(even) div:nth-child(odd)').forEach((el) => {
    el.style.backgroundColor = 'black';
  });

  document.querySelectorAll('.board div:nth-child(odd) div:nth-child(even)').forEach((el) => {
    el.style.backgroundColor = 'black';
  });
});
