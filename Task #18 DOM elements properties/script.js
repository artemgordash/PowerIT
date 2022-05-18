document.addEventListener('DOMContentLoaded', () => {
  const ball = document.querySelector('#player');
  ball.style.left = `${window.getComputedStyle(ball).left}`;
  ball.style.top = `${window.getComputedStyle(ball).top}`;

  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown' && parseInt(ball.style.top, 10) < 450) {
      ball.style.top = `${parseInt(ball.style.top, 10) + 25}px`;
    } else if (e.key === 'ArrowUp' && parseInt(ball.style.top, 10) > 0) {
      ball.style.top = `${parseInt(ball.style.top, 10) - 25}px`;
    } else if (e.key === 'ArrowRight' && parseInt(ball.style.left, 10) < 450) {
      ball.style.left = `${parseInt(ball.style.left, 10) + 25}px`;
    } else if (e.key === 'ArrowLeft' && parseInt(ball.style.left, 10) > 0) {
      ball.style.left = `${parseInt(ball.style.left, 10) - 25}px`;
    }
  });
});
