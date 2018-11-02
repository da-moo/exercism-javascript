export const steps = (num, currentStep = 0) => {
  if (num <= 0) {
    throw new Error("Only positive numbers are allowed");
  } else if (num === 1) {
    return currentStep;
  } else if (num % 2 === 0) {
    return steps(num / 2, ++currentStep);
  } else {
    return steps(3 * num + 1, ++currentStep);
  }
};

export default steps;
