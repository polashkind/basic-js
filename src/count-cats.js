module.exports = function countCats(matrix) {
  
let ears = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^'){ 
        ears = ears + 1;
      }
    }
  }
  return ears;
};
