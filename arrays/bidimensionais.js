let averageTemp = [];

// averageTemp[0] = [72, 75,79, 81, 81];
// averageTemp[1] = [81, 79, 75, 73, 72];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

averageTemp[1] = [];
averageTemp[1][0] = 72;
averageTemp[1][1] = 75;
averageTemp[1][2] = 79;
averageTemp[1][3] = 79;
averageTemp[1][4] = 81;
averageTemp[1][5] = 81;


function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) { // Representa as linhas
    for (let j = 0; j < myMatrix[i].length; j++) { // As colunas
      console.log(myMatrix[i][j]);
    }
  }
}
console.table(averageTemp)
printMatrix(averageTemp)
