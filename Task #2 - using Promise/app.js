const resultDiv = document.querySelector('#result');

const serverResponse = () => 'Response from server';

const userRequest = () => {
  resultDiv.textContent = 'Loading...';
  new Promise((resolve) => {
    setTimeout(() => {
      const response = serverResponse();
      resolve(response);
    }, 2000);
  }).then((response) => {
    resultDiv.textContent = `${response}`;
  });
};

userRequest();
