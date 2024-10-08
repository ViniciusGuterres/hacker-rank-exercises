function beautifulDays(initialDay, finalDay, divisor) {
    // Setting my range of days based on the initial and the final day
    const myRangeOfDays = Array.from({ length: finalDay - initialDay + 1 },
        (_, i) => initialDay + i);

    // Filtering the beautiful days based on the math clauses
    const myBeautifulDaysArr = myRangeOfDays.filter(currentDay => {
        const reversedNumber = reverse(currentDay);
        const reverseAndCurrentDayDifference = Math.abs(reversedNumber - currentDay);

        if (reverseAndCurrentDayDifference % divisor === 0) {
            return currentDay;
        }
    });

    return myBeautifulDaysArr.length;
}

function reverse(myNumber) {
    const reversedStr =
        myNumber
            .toString()
            .split('')
            .reverse()
            .join('');

    return parseInt(reversedStr)
}

// Input 20, 23, 6
const result = beautifulDays(20, 23, 6);

console.log("🚀 ~ result:", result)

// Expect output 2