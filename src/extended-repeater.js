module.exports = function repeater(str, options) {
    const { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator } = options;

    if (str === undefined) {
        return '';
    }

    const strToFill = str + repeater(addition, { separator: additionSeparator, repeatTimes: additionRepeatTimes });
    const mainStr = Array(repeatTimes).fill(strToFill).join(separator);
    
    return mainStr;
};
  