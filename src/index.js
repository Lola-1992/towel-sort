
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix === []) {
  return [] };
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
     if (i % 2 !== 0) {
          matrix[i].sort((a , b) => b - a );
   } else {
          matrix[i].sort((a , b) => a - b );
   }
          matrix[i].forEach(item => arr.push(item));
   }
    return arr;
   };
