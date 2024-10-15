function utopianTree(numberOfCycles) {
    let treeInitialHeight = 1;

    for (let i = 1; i <= numberOfCycles; i++) {        
        if (i % 2 === 0) {
            treeInitialHeight++;
            continue;
        }   

        treeInitialHeight = treeInitialHeight * 2;
    }

    return treeInitialHeight;
}

const result = utopianTree(5);

// Output expected: 14
console.log("🚀 ~ result:", result)
