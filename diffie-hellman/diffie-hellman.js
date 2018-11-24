export class DiffieHellman {
  constructor(p, g) {
    if (p < 1 || g > p) {
      throw new Error("Arguments out of range");
    } else if (!(this.isPrime(p) && this.isPrime(g))) {
      throw new Error("Arguments are not prime");
    }
    this._p = p;
    this._g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey <= 1) {
      throw new Error("Private key must be greater than 1");
    } else if (privateKey >= this._p) {
      throw new Error(
        "Private key cannot be greater than or equal to modulus parameter p"
      );
    }
    return this._g ** privateKey % this._p;
  }

  getSharedSecret(privateKey, publicKey) {
    return publicKey ** privateKey % this._p;
  }

  isPrime(num) {
    if (num % 2 === 0) {
      return false;
    }
    const limit = Math.sqrt(num);
    for (let start = 2; start <= limit; start += 2) {
      if (num % start === 0) {
        return false;
      }
    }
    return num > 1;
  }
}

export default DiffieHellman;
