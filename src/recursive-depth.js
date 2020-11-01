module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        const result = Math.max.apply(null, arr.map(el => Array.isArray(el) ? this.calculateDepth(el, depth + 1) : depth));

        return Number.isFinite(result) ? result : depth;
    }
};