const chainMaker = {
  getLength() {
    return this.length;
  },
  addLink(value) {
    return '( ' + value + ' )'+ '~~';
  },
  removeLink(position) {
    this.slice(position);
  },
  reverseChain() {
    this.reverse();
  },
  finishChain() {
    return this;
  }
};

module.exports = chainMaker;
