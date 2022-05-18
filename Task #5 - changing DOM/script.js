document.addEventListener('DOMContentLoaded', () => {
  const counter = (minusBTN, plusBTN, counterDIV) => {
    let count = 0;
    counterDIV.textContent = count;

    minusBTN.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counterDIV.textContent = count;
      }
    });
    plusBTN.addEventListener('click', () => {
      if (count < 9) {
        count++;
        counterDIV.textContent = count;
      }
    });
  };

  counter(
    document.querySelector('.minus'),
    document.querySelector('.plus'),
    document.querySelector('.count'),
  );
});
