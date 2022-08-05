// Input 1012
function findDigits(digits) {
    let digitsArray = [];
    const digitsToString = digits.toString();

    // Getting all digits and put into a array
    for (let i = 0; i < digitsToString.length; i++) {
        const digitRow = digitsToString.charAt(i);

        digitsArray.push(+digitRow);
    }

    // filter the digits that are divisor by the current digit element
    const digitsDivisors = digitsArray.filter((digit) => (digits % digit) == 0);

    return digitsDivisors?.length;
    // Expect OutPut: 3
}

console.log(findDigits(1012));