function plusMinus(arr) {
    let positiveNumbersAmount = 0;
    let negativeNumbersAmount = 0;
    let zeroNumbersAmount = 0;

    // get the ratios of positive, negatives and zeros amount
    for (let  i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item > 0) {
            positiveNumbersAmount++;
        } else if(item < 0) {
            negativeNumbersAmount++;
        } else {
            zeroNumbersAmount++;
        }
    }
    
    // log at each ratios number with 6 decimals
    console.log((positiveNumbersAmount / arr.length).toFixed(6));
    console.log((negativeNumbersAmount / arr.length).toFixed(6));
    console.log((zeroNumbersAmount / arr.length).toFixed(6));   
}

console.log("🚀 ~ file: plusMinus.js ~ line 2 ~ plusMinus ~ plusMinus", plusMinus([ -4, 3, -9, 0, 4, 1 ]));

// Expected output :
// 0.500000
// 0.333333
// 0.166667