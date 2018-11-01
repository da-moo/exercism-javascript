export const encode = (text) => {
  const matches = text.match(/([a-zA-Z]|\s)\1*/g);
  if (matches === null) {
    return '';
  }
  return matches.reduce((encoded, match) => {
    const char = match.charAt(0);
    return encoded + (match.length === 1 ? char : match.length + char);
  }, '');
};

export const decode = (text) => {
  const matches = text.match(/(\d*)([a-zA-Z]|\s)/g);
  if (matches === null) {
    return '';
  }
  return matches.reduce((decoded, match) => {
    const splitMatch = match.match(/\s+|[a-zA-Z]+|\d+/g);
    if (splitMatch !== null) {
      const count = parseInt(splitMatch[0], 10) || 1;
      const letter = count === 1 ? splitMatch[0] : splitMatch[1];
      return decoded + letter.repeat(count);
    }
    return decoded;
  }, '');
};
