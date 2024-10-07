function beautifulDays(initialDay, finalDay, divisor) {
    // Setting my range of days
    const myRangeOfDays = [initialDay];

    const daysDifference = finalDay - initialDay;

    for (let i = 0; i < daysDifference; i++) {
        const myCurrentDay = myRangeOfDays[myRangeOfDays.length - 1];
        myRangeOfDays.push(myCurrentDay + 1);
    }

    // Filtering the beautiful days based on the math clauses
    const beautifulDaysArr = myRangeOfDays.filter(currentDay => {
        const currentDayReverse = reverse(currentDay);

        // Calc
        const currentAndReverseCurrentDayDifference = Math.abs(currentDayReverse - currentDay);
        const divisionResult = Number((currentAndReverseCurrentDayDifference / divisor));

        if (divisionResult % 1 === 0) {
            return currentDay;
        }
    });

    return beautifulDaysArr.length;
}

function reverse(number) {
    return number.toString().split('').reverse().join('');
}

// Input 20, 23, 6
const result = beautifulDays(20, 23, 6);

console.log("🚀 ~ result:", result)

// Expect output 2