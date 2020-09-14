const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const activity = parseFloat(sampleActivity);

  return Number.isNaN(activity) || activity > 15 || activity <= 0
    ? false 
    : Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / activity) / Math.LN2.toFixed(3));
};
