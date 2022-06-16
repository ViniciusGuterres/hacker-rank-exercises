function birthdayCakeCandles(candles) {
    const biggestCandle = candles.reduce((a, b) => Math.max(a, b));

    // return the amount of biggestCandles
    return candles.filter(candle => candle == biggestCandle).length;
    // Expect OutPut: 2
}

console.log("🚀 ~ file: birthCake.js ~ line 25 ~ birthdayCakeCandlesTwo ~ birthdayCakeCandlesTwo", birthdayCakeCandles([3, 2, 1, 3]));