// input [10, 5, 20, 20, 4, 5, 2, 25, 1];
function breakingRecords(scores) {
    let biggestPointsRecord = scores[0];
    let leastPointsRecord = scores[0];

    const breakingBiggestRecordsAmount = scores.filter(point => {
        if (point > biggestPointsRecord) {
            biggestPointsRecord = point;
            return point
        }
    })

    const breakingLeastRecordsAmount = scores.filter(point => {
        if (point < leastPointsRecord) {
            leastPointsRecord = point;
            return point
        }
    })

    return [
        breakingBiggestRecordsAmount.length,
        breakingLeastRecordsAmount.length
    ];
    // Expect OutPut [2, 4]
}

const scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(scoresArray));