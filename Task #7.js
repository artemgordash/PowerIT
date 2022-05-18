const createMatrix = (rows = 1, columns = 1) => {
  const column = [];
  for (let j = 0; j < 10 || columns; j++) {
    column[j] = 1;
  }
  for (let i = 1; i <= 10 || rows; i++) {
    // eslint-disable-next-line no-console
    console.log(column);
  }
};

createMatrix(6, 6);
