function miniMaxSum(arr) {
    let minSum;
    let maxSum;

    const areAllElementsEquals = arr.every(item => item == arr[0]);

    // Case all elements equals, the max and min arr will just sum the first fours elements
    if (areAllElementsEquals) {
        arr.pop();
        const sumAllFirstFoursElements = arr.reduce((a, b) => a + b);

        minSum = sumAllFirstFoursElements;
        maxSum = sumAllFirstFoursElements;

    }
    // Sum the max and min array 
    else {
        let miniElement = Math.min(...arr);
        let maxElement = Math.max(...arr);

        let minArray = [];
        let maxArray = [];

        // filtering the max and min sums arras
        for (let i = 0; i < arr.length; i++) {
            const arrRow = arr[i];

            if (arrRow != maxElement) {
                minArray.push(arrRow);
            }

            if (arrRow != miniElement) {
                maxArray.push(arrRow);
            }
        }

        minSum = minArray.reduce((a, b) => a + b);
        maxSum = maxArray.reduce((a, b) => a + b);
    }

    console.log(`${minSum} ${maxSum}`);
    // Expect OutPut: 20 20
}

console.log("🚀 ~ file: miniMaxSum.js ~ line 2 ~ miniMaxSum ~ miniMaxSum", miniMaxSum([5, 5, 5, 5, 5]))