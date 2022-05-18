/* Написать код который выведет последовательность Fibonacci (первые n чисел) */

const limit = 7;
let n1 = 0;
let n2 = 1;
let nextTerm;

for (let i = 1; i <= limit; i++) {
  // eslint-disable-next-line no-console
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
