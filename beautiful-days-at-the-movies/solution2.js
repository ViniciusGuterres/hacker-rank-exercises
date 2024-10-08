function beautifulDays(initialDay, finalDay, divisor) {
    // Setting my range of days based on the initial and the final day
    const myRangeOfDays = Array.from({ length: finalDay - initialDay + 1 },
        (_, i) => initialDay + i);

    // Filtering the beautiful days based on the math clauses
    const myBeautifulDaysArr = myRangeOfDays.filter(currentDay => {
        const reversedNumber = reverse(currentDay);

        // Calculate the absolute difference between the current day and the reversed number
        const reverseAndCurrentDayDifference = Math.abs(reversedNumber - currentDay);

        // Check if the difference is divisible by the divisor without a remainder.
        return reverseAndCurrentDayDifference % divisor === 0;
    });

    return myBeautifulDaysArr.length;
}

function reverse(myNumber) {
    return Number(myNumber.toString().split('').reverse().join(''));
}

// Input 20, 23, 6
const result = beautifulDays(20, 23, 6);

console.log("🚀 ~ result:", result)

// Expect output 2