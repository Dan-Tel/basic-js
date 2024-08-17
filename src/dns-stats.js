const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const domainParts = domain.split(".");

    for (let j = domainParts.length - 1; j >= 0; j--) {
      const dns = "." + domainParts.slice(j).reverse().join(".");
      if (!obj[dns]) obj[dns] = 0;
      obj[dns]++;
    }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
