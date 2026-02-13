export const fibonacci = (n) => {
  console.log("This was printed recursively");

  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

export const fibs = (n) => {
  console.log("This was printed recursively");

  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  let arr = fibs(n - 1);
  let next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);
  return arr;
};
