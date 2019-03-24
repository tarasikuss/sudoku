module.exports = function solveSudoku(matrix) {
solution(matrix);
  return matrix;
}
function solution(matrix){
  var row = 0;
  var col = 0;
  for (var i=0; i<matrix.length; i++){
    for (var j=0; j<matrix[i].length; j++){
      if (matrix[i][j]==0){
        var mass = [];
        for (var p=0;p<9;p++){
          mass.push(matrix[p][j]);
        }
        row=i;
        col=j;
        for (var k=1; k<=9;k++){
            if (matrix[i].indexOf(k)==-1&&mass.indexOf(k)==-1&&thirdAreaCheck(k,i,j,matrix)){
              matrix[i][j]=k;
            if (solution(matrix)) 
              {
                return true;
              }
            else
              {
                matrix[row][col] = 0;
              }
            }
      }
      return false;
      }
    }
  }
  return true;
}
function thirdAreaCheck(num, row, col, matrix)
{
  var thirdRowNum = Math.floor(row / 3) * 3;
  var thirdColNum = Math.floor(col / 3) * 3;
  for (var i = 0; i < 3; i++)
  {
    for (var j = 0; j < 3; j++)
    {
      if (matrix[thirdRowNum + i][thirdColNum + j] == num) return false;
    };
  };
  return true;
};