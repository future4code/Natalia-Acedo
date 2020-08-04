export const findMissingNumber = (arr: number[]): number => {
  const expectedSum = 5050;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return expectedSum - sum;
};
