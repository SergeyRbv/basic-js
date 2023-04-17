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
function calculateHanoi(diskNumberи, turnsSpeed) {
  const perSecond = (turnsSpeed/60)/60;
  const turn = Math.pow(2, diskNumberи) - 1;
  return {
    turns: turn, 
    seconds: Math.floor(turn/perSecond)}
}

module.exports = {
  calculateHanoi
};
