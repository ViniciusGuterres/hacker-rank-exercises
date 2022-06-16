function birthdayCakeCandles(candles) {
    // not recomend use max and spread operator with an array with a largest numbers of elements
    const biggestCandle = Math.max(...candles);

    // return the amount of biggestCandles
    return candles.filter(candle => candle == biggestCandle).length;
    // Expect OutPut: 2
}

console.log("🚀 ~ file: birthCake.js ~ line 25 ~ birthdayCakeCandlesTwo ~ birthdayCakeCandlesTwo", birthdayCakeCandles([3, 2, 1, 3]));