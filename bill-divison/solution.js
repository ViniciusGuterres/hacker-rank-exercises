function bonAppetit(bill, k, b) {
    let result = 'Bon Appetit';

    const billCorrectDivision = (bill
        .filter((item, index) => index !== k)
        .reduce((a, b) => a + b)) / 2;

    if (billCorrectDivision !== b) {
        result = b - billCorrectDivision;
    }

    console.log(result)
}

// Output expected: "Bon Appetit"
const result = bonAppetit([3, 10, 2, 9], 1, 7);
