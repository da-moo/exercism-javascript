export const validate = num => {
  const arrayOfDigits = Array.from(num.toString(), x => parseInt(x));
  const numOfDigits = arrayOfDigits.length;
  const armstrong = arrayOfDigits.reduce((prev, curr) => {
    return prev + curr ** numOfDigits;
  }, 0);
  return num === armstrong;
};
