/* Написать рекурсивную функцию которая вычисляет факториал заданного числа n */

const factorial = (n, result = 1) => {
  if (!n) {
    return result;
  }
  return factorial(n - 1, result * n);
};

factorial(3);
