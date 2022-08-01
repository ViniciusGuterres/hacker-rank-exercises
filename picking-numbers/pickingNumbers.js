function pickingNumbers(intArray) {
    const sortedArray = intArray.sort((a, b) => a - b);

    const subArrays = [];
    let biggestSubArrayLength;

    for (let i = 0; i < sortedArray.length; i++) {
        const numberRow = sortedArray[i];
        const subArray = [numberRow];

        for (let j = i + 1; j < sortedArray.length; j++) {
            const secondNumberRow = sortedArray[j];

            // push in a exist sub array
            if (Math.abs(numberRow - secondNumberRow) <= 1) {
                subArray.push(secondNumberRow);
            }
            // jump to the next subArray
            else {
                i = j - 1;
                j = sortedArray.length;
            }
        }

        subArrays.push(subArray);
    }

    biggestSubArrayLength = subArrays.map(element => {
        
        return element.length;
    });

    return biggestSubArrayLength.reduce((acc, items) => Math.max(acc, items), 0);
}

const intNumbersArray = [4, 6, 5, 3, 3, 1];

pickingNumbers(intNumbersArray);
console.log("🚀 ~ file: pickingNumbers.js ~ line 46 ~ pickingNumbers(intNumbersArray);", pickingNumbers(intNumbersArray))
