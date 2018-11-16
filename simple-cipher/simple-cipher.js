const mod = (n, m) => ((n % m) + m) % m;

export const Cipher = class {
  constructor(key) {
    if ((key && !key.match(/^[a-z]+$/)) || key === '') {
      throw new Error('Bad key');
    }
    this.key = key || Cipher.generateRandomKey();
  }

  static generateRandomKey() {
    return Array.from(Array(Cipher.RANDOM_KEY_LENGTH), () => {
      const charPosition = Math.floor(
        Math.random() * Cipher.POSSIBLE_KEY_CHARS.length
      );
      return Cipher.POSSIBLE_KEY_CHARS[charPosition];
    }).join('');
  }

  encode(text) {
    return this.applyCipher(text, Cipher.ENCODE_COEFFICIENT);
  }

  decode(text) {
    return this.applyCipher(text, Cipher.DECODE_COEFFICIENT);
  }

  static calculateCharCode(char, shiftAmount) {
    return (
      mod(
        char.charCodeAt(0) - Cipher.FIRST_CHAR_CODE + shiftAmount,
        Cipher.POSSIBLE_KEY_CHARS.length
      ) + Cipher.FIRST_CHAR_CODE
    );
  }

  calculateShiftAmount(stringIndex) {
    return (
      this.key.charCodeAt(stringIndex % this.key.length) -
      Cipher.FIRST_CHAR_CODE
    );
  }

  applyCipher(text, shiftDirection) {
    return Array.from(text, (char, index) => {
      const shiftAmount = this.calculateShiftAmount(index) * shiftDirection;
      return String.fromCharCode(Cipher.calculateCharCode(char, shiftAmount));
    }).join('');
  }
};

Cipher.POSSIBLE_KEY_CHARS = 'abcdefghijklmnopqrstuvwxyz';
Cipher.RANDOM_KEY_LENGTH = 100;
Cipher.FIRST_CHAR_CODE = Cipher.POSSIBLE_KEY_CHARS.charCodeAt(0);
Cipher.ENCODE_COEFFICIENT = 1;
Cipher.DECODE_COEFFICIENT = -1;

export default Cipher;
