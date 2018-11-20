const ALPHA_UNIQ_COUNT_PATTERN = /([a-z])(?!.*\1)/g;
const LETTERS_IN_ALPHABET = 26;

export const isPangram = text =>
  (text.toLowerCase().match(ALPHA_UNIQ_COUNT_PATTERN) || []).length ===
  LETTERS_IN_ALPHABET;

export default isPangram;
