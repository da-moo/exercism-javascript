export const Cipher = class {
  constructor(key) {
    if ((key && !key.match(/^[a-z]+$/)) || key === '') {
      throw new Error('Bad key');
    }
    this.key = key || Cipher.generateRandomKey();
  }

  static generateRandomKey() {
    return Array.from(Array(Cipher.randomKeyLength))
      .map(() => {
        const charPosition = Math.floor(Math.random() * Cipher.possible.length);
        return Cipher.possible[charPosition];
      })
      .join('');
  }

  encode(text) {
    return this.applyCipher(text, 'encode');
  }

  decode(text) {
    return this.applyCipher(text, 'decode');
  }

  applyCipher(text, type) {
    const mod = (n, m) => ((n % m) + m) % m;

    const calculateShiftAmount = stringIndex =>
      this.key.charCodeAt(stringIndex % this.key.length) - Cipher.firstCharCode;

    const calculateCharCode = (char, shiftAmount) => mod(
      char.charCodeAt(0) - Cipher.firstCharCode + shiftAmount,
      Cipher.possible.length,
    ) + Cipher.firstCharCode;

    const shiftDirection = type === 'decode' ? -1 : 1;

    return Array.from(text)
      .map((char, index) => {
        const shiftAmount = calculateShiftAmount(index) * shiftDirection;
        return String.fromCharCode(calculateCharCode(char, shiftAmount));
      })
      .join('');
  }
};

Cipher.possible = 'abcdefghijklmnopqrstuvwxyz';
Cipher.randomKeyLength = 100;
Cipher.firstCharCode = Cipher.possible.charCodeAt(0);

export default Cipher;
