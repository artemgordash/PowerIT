document.addEventListener('DOMContentLoaded', () => {
  const usersTABLE = document.querySelector('.users');
  document.querySelector('#add-user').addEventListener('click', () => {
    const newTr = document.createElement('tr');
    newTr.innerHTML = `<td>${document.querySelector('#user_name').value}</td><td style="cursor: pointer;">&#10060</td>`;
    document.querySelector('#user_name').value = '';
    usersTABLE.appendChild(newTr);
  });
  usersTABLE.addEventListener('click', (e) => {
    if (e.target.textContent === '❌') {
      e.target.parentNode.remove();
    }
  });
});
