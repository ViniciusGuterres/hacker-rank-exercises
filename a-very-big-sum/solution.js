function aVeryBigSum(arr) {
    return arr.reduce((a, b) => BigInt(a) + BigInt(b)).toString();
}

const myArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const result = aVeryBigSum(myArr);
console.log("🚀 ~ result:", result)