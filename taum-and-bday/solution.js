function taumBday(blackGiftTotal, whiteGiftTotal, blackGiftPrice, whiteGiftPrice, tradePrice) {
    blackGiftTotal = BigInt(blackGiftTotal);
    whiteGiftTotal = BigInt(whiteGiftTotal);
    blackGiftPrice = BigInt(blackGiftPrice);
    whiteGiftPrice = BigInt(whiteGiftPrice);
    tradePrice = BigInt(tradePrice);

    let blackGiftCoast = (whiteGiftPrice + tradePrice) < blackGiftPrice ? whiteGiftPrice + tradePrice : blackGiftPrice;
    let whiteGiftCost = (blackGiftPrice + tradePrice) < whiteGiftPrice ? blackGiftPrice + tradePrice : whiteGiftPrice;

    const totalCost = blackGiftCoast * blackGiftTotal + whiteGiftTotal * whiteGiftCost;

    return totalCost.toString();
}

const b = 3;

const w = 5;

const bc = 3;

const wc = 4;

const z = 1;

const result = taumBday(b, w, bc, wc, z);

// Expect output 29 
console.log("🚀 ~ result:", result)