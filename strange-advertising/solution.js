function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;

    for (let i = 0; i <  n; i++) {
        const liked = Math.floor(shared / 2);        
        shared = liked * 3;
        cumulative+= liked;        
    }

    return cumulative;
}

const result = viralAdvertising(50);

// Output expected: 24
console.log("🚀 ~ viralAdvertising:", result)


// The day number 1 always start with 5 shared
// the likes area calculated by the following method: floor(shared / 2) 
// cumulative is the previous shared plus the likes
// shared is equal to cumulative plus 3

// (5/2) * 3 = 2 * 3 = 6

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24