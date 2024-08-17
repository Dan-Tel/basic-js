const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str += "_";

  let encoded = "";
  let counter = 0;
  let prev = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == prev) {
      counter++;
    }
    else {
      if (counter > 0) {
        if (counter == 1) {
          encoded += prev;
        }
        else {
          encoded += counter + prev;
        }
      }
      counter = 1;
    }

    prev = str[i];
  }

  return encoded;
}

module.exports = {
  encodeLine
};
