document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'rgba(255, 1, 1, .5)';
  setTimeout(() => {
    document.body.style.backgroundColor = 'rgba(1, 255, 1, .5)';
  }, 3000);

  const toOrangeButton = document.querySelector('.switcher');

  toOrangeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgba(255, 100, 1, .8)';
  });

  const numbersOL = document.createElement('ol');
  document.body.appendChild(numbersOL);
  const addOL = (ol, limit, interval = 2000) => {
    let el = 1;
    const intervalID = setInterval(() => {
      if (el === limit) {
        clearInterval(intervalID);
      }
      ol.appendChild(document.createElement('li')).textContent = `${el}`;
      el++;
    }, interval);
  };
  addOL(numbersOL, 20, 200);
});
