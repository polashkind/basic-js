module.exports = function transform(arr) {
    if (!Array.isArray(arr)){
        throw Error;
    };

    const array = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next': i++; break;
            case '--discard-prev': array.pop(); break;
            case '--double-next': i < arr.length - 1 && array.push(arr[i+1]); break;
            case '--double-prev': i > 0 && array.push(arr[i-1]); break;
            default: array.push(arr[i]); break;
        }
    }

    return array;
};
