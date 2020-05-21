module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber);
  return { turns, seconds: turns / (turnsSpeed / 3600)}
}