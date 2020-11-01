const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.links.length || position <= 0 || Number.isNaN(+position)) {
      this.links = [];
      throw new Error();
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links = this.links.reverse();
    return this;
  },
  finishChain() {
    const result = this.links.join('~~');
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
