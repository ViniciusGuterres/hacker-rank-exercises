// This solutions only works with safe integer numbers
function taumBday(blackGiftTotal, whiteGiftTotal, blackGiftPrice, whiteGiftPrice, tradePrice) {
    let blackGiftCost = Math.min(blackGiftPrice, whiteGiftPrice + tradePrice);    
    let whiteGiftCost = Math.min(whiteGiftPrice, blackGiftPrice + tradePrice);

    return blackGiftCost * blackGiftTotal + whiteGiftTotal * whiteGiftCost;
}

const b = 3;
const w = 5;
const bc = 3;
const wc = 4;
const z = 1;

const result = taumBday(b, w, bc, wc, z);

// Output expected: 29 
console.log("🚀 ~ result:", result)