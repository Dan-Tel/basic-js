const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = `${n}`;

  let i = 0;
  let prev = 9;
  for (; i < s.length; i++) {
    if (+s[i] > prev) {
      break;
    }

    prev = +s[i];
  }

  return +(s.slice(0, i - 1) + s.slice(i));
}

module.exports = {
  deleteDigit
};
