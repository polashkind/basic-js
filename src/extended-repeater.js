module.exports = function repeater(str, options) {
    const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    const mainStr = Array(repeatTimes).fill(str).join(separator);
    const additionalStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    
    return mainStr + additionalStr;
};
  