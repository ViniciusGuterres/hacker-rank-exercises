function migratoryBirds(arr) {
    const birdsSighted = {};

    arr.forEach(bird => {
        birdsSighted[bird] = (birdsSighted[bird] || 0) + 1;
    });
        
    let maxSightedBirdID = parseInt(Object.keys(birdsSighted)[0]);
    let maxSightedBirdCounterValue = birdsSighted[maxSightedBirdID];

    for (let birdIDStr in birdsSighted) {
        const birdSightCounter = birdsSighted[birdIDStr];
        const birdID = parseInt(birdIDStr);

        if (
            birdSightCounter > maxSightedBirdCounterValue
            || (birdSightCounter === maxSightedBirdCounterValue && birdID < maxSightedBirdID)
        ) {
            maxSightedBirdID = birdID;
            maxSightedBirdCounterValue = birdSightCounter;
        }
    }

    return maxSightedBirdID;
}

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

// Expect Output 3
const result = migratoryBirds(arr);

console.log("🚀 ~ result:", result)