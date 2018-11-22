export const reverseString = text => {
  let returnString = "";
  // Use an array from a string to handle Unicode properly
  const textArray = Array.from(text);
  for (let index = textArray.length - 1; index >= 0; index--) {
    returnString += textArray[index];
  }
  return returnString;
};
