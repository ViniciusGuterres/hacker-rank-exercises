function beautifulDays(initialDay, finalDay, divisor) {
    const myRangeOfDays = Array.from({ length: finalDay - initialDay + 1 },
        (_, i) => initialDay + i);

    const myBeautifulDaysArr = myRangeOfDays.filter(currentDay => {
        const reverse = parseInt(currentDay.toString().split('').reverse().join(''));
        const reverseAndCurrentDayDifference = Math.abs(reverse - currentDay);

        if (reverseAndCurrentDayDifference % divisor === 0) {
            return currentDay;
        }        
    });

    return myBeautifulDaysArr.length;
}

// Input 20, 23, 6
const result = beautifulDays(20, 23, 6);

console.log("🚀 ~ result:", result)

// Expect output 2