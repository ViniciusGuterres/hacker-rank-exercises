function lonelyinteger(a) {
    const arraySorted = a.sort();

    for (let i = 0; i < arraySorted.length; i += 2) {
        const next = arraySorted[i + 1];
        const current = arraySorted[i];

        if (current != next) {
            return current;
        }
    }
}

const result = lonelyinteger([0, 0, 1, 2, 1]);

// Output expected: 
console.log("🚀 ~ result:", result)