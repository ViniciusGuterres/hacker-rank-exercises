function diagonalDifference(arr) {
    let absoluteDifference;

    let leftToRightDiagonal = [];
    let rightToLeftDiagonal = [];

    let leftDiagonalCurrentIndex = 0;
    let rightDiagonalCurrentIndex = arr.length - 1;

    // Looping througn the matrix and push at diagonal left or right diagonals arrays
    for (let i = 0; i < arr.length; i++) {
        const arrRow = arr[i];

        for (let j = 0; j < arrRow.length; j++) {
            const arrColumn = arrRow[j];

            if (j == leftDiagonalCurrentIndex) {
                leftToRightDiagonal.push(arrColumn);
            }

            if (j == rightDiagonalCurrentIndex) {
                rightToLeftDiagonal.push(arrColumn);
            }
        }
        leftDiagonalCurrentIndex++;
        rightDiagonalCurrentIndex--;
    }

    const sumArray = (arr) => arr.reduce((a, b) => a + b); 

    // Sum the right and left diagonal array
    leftToRightDiagonal = sumArray(leftToRightDiagonal)
    rightToLeftDiagonal = sumArray(rightToLeftDiagonal);

    // Setting the absolute difference. The result must be a positive value
    if (leftToRightDiagonal > rightToLeftDiagonal) {
        absoluteDifference = leftToRightDiagonal - rightToLeftDiagonal;
    } else {
        absoluteDifference = rightToLeftDiagonal - leftToRightDiagonal;
    }

    return absoluteDifference;
}

console.log(diagonalDifference(
    [

        [6, 6, 7 - 10, 9, -3, 8, 9, -1],
        [9, 7, -10, 6, 4, 1, 6, 1, 1],
        [-1, - 2, 4, -6, 1, -4, -6, 3, 9],
        [-8, 7, , 6, -1, -6, -6, 6, -7, 2],
        [-10, -4, 9, 1, -7, 8, -5, 3, -5],
        [-8, - 3, -4, 2, -3, 7, -5, 1, -5],
        [-2, - 7, -4, 8, 3, -1, 8, 2, 3],
        [-3, 4, 6, -7, -7, -8, -3, 9 - 6],
        [-2, 0, 5 ,4, 4, 4, -3, 3, 0]
    ]
))