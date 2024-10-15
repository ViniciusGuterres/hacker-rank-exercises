// This solution only works with safe integer numbers
// calculateMinGiftCost
function taumBday(
    totalBlackGifts,
    totalWhiteGifts,
    priceBlackGift,
    priceWhiteGift,
    exchangeCost
) {
    const blackGiftCost = Math.min(priceBlackGift, priceWhiteGift + exchangeCost);
    const whiteGiftCost = Math.min(priceWhiteGift, priceBlackGift + exchangeCost);

    return blackGiftCost * totalBlackGifts + totalWhiteGifts * whiteGiftCost;
}

const b = 3;
const w = 5;
const bc = 3;
const wc = 4;
const z = 1;

const result = taumBday(b, w, bc, wc, z);

// Output expected: 29 
console.log("🚀 ~ result:", result)