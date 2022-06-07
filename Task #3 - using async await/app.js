const resultDiv = document.querySelector('#result');

const serverResponse = () => 'Response from server';

const userRequest = async () => {
  resultDiv.textContent = 'Loading...';
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const response = serverResponse();
      resolve(response);
    }, 2000);
  });
  resultDiv.textContent = `${await promise}`;
};

userRequest();
