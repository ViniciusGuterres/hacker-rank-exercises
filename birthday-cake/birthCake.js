function birthdayCakeCandles(candles) {
    let biggestCandle = 0;
    
    // get the biggest candle
    for (let i = 0; i < candles.length; i++) {
        const candleRow = candles[i];

        if (candleRow > biggestCandle) {
            biggestCandle = candleRow;
        }
    }

    const amountBiggestCandle = candles.filter(candle => candle == biggestCandle);

    return amountBiggestCandle?.length;
}

console.log("🚀 ~ file: birthCake.js ~ line 6 ~ birthdayCakeCandles:::", birthdayCakeCandles([ 3, 2, 1, 3 ]))
