const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let encryptedMessage = "";
    const modifiedMesage = message.toUpperCase();
    const modifiedKey = key.toUpperCase();

    for (let i = 0, j = 0; i < modifiedMesage.length; i++) {
      const charCode = modifiedMesage[i].charCodeAt(0) - 65;
      if (0 <= charCode && charCode <= 25) {
        const keyCode = modifiedKey[j % modifiedKey.length].charCodeAt(0);
        const shift = keyCode - 65;

        encryptedMessage += String.fromCharCode(65 + ((charCode + shift) % 26));

        j++;
      }
      else {
        encryptedMessage += message[i];
      }
    }

    if (!this.isDirect) {
      encryptedMessage = encryptedMessage.split("").reverse().join("");
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let message = "";
    const modifiedKey = key.toUpperCase().split("");

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage[i].charCodeAt(0) - 65;
      if (0 <= charCode && charCode <= 25) {
        const keyCode = modifiedKey[j % modifiedKey.length].charCodeAt(0);
        const shift = keyCode - 65;

        if (charCode - shift >= 0) {
          message += String.fromCharCode(65 + (charCode - shift));
        }
        else {
          message += String.fromCharCode(65 + (charCode - shift + 26));
        }

        j++;
      }
      else {
        message += encryptedMessage[i];
      }
    }

    if (!this.isDirect) {
      message = message.split("").reverse().join("");
    }

    return message;
  }
}

module.exports = {
  VigenereCipheringMachine
};
