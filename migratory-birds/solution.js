function migratoryBirds(arr) {
    const birdsSighted = {};

    arr.forEach(bird => {
        if (!birdsSighted[bird]) {
            birdsSighted[bird] = 1;
        } else {
            birdsSighted[bird]++;
        }
    });

    
    const birdsValues = Object.entries(birdsSighted);
    let maxSightedBirdID = birdsValues[0][0];
    
    for (let i = 0; i < birdsValues.length; i++) {
        const [birdID, birdSighCounter] = birdsValues[i];

        const maxSightedBirdCounterValue = birdsSighted[maxSightedBirdID];

        if (birdSighCounter > maxSightedBirdCounterValue) {
            maxSightedBirdID = birdID;
            continue;
        }

        if (
            birdSighCounter == maxSightedBirdCounterValue 
            && birdID < maxSightedBirdID
        ) {
            maxSightedBirdID = birdID;
            continue;
        }
    }

    return maxSightedBirdID;
}

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

// Expect Output 3
const result = migratoryBirds(arr);

console.log("🚀 ~ result:", result)