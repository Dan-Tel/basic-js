const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = new Array(26).fill(0), chars2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    chars1[s1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s2.length; i++) {
    chars2[s2.charCodeAt(i) - 97]++;
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans += Math.min(chars1[i], chars2[i]);
  }

  return ans;
}

module.exports = {
  getCommonCharacterCount
};
