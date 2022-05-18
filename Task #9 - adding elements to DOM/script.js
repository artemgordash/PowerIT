document.addEventListener('DOMContentLoaded', () => {
  const showNotification = (config) => {
    const notificationDIV = document.createElement('div');
    document.body.appendChild(notificationDIV).textContent = `${config.message}`;
    notificationDIV.classList.add('notification', config.className);
    notificationDIV.style.cssText = `
      position: absolute;
      top: ${config.top}px;
      right: ${config.right}px;
      width: 100px;
      height: 70px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: black;
    `;
    setTimeout(() => {
      notificationDIV.remove();
    }, 1500);
  };

  showNotification({
    top: 10,
    right: 10,
    message: 'Working...',
    className: 'warning',
  });
});
