const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const numberOfMoves = [0];
  for (let i = 1; i <= disksNumber; i++) {
    numberOfMoves.push(2 * numberOfMoves[i - 1] + 1);
  }

  return {
    turns: numberOfMoves[disksNumber],
    seconds: Math.floor(numberOfMoves[disksNumber] / turnsSpeed * 3600)
  };
}

module.exports = {
  calculateHanoi
};
