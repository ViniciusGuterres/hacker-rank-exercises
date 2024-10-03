function binarySearch(rankList, score) {
    if (rankList.length == 2) {
        return rankList;
    }

    const rankListMiddleIndex = Math.floor((rankList.length - 1) / 2);
    const rankListMiddleValue = rankList[rankListMiddleIndex];
    const rankListMiddleNextValue = rankList[rankListMiddleIndex + 1];
    const rankListMiddlePreviousValue = rankList[rankListMiddleIndex - 1];

    if (score < rankListMiddleValue && score < rankListMiddleNextValue) {
        const splittedRankList = rankList.slice(rankListMiddleIndex, rankList.length);

        return binarySearch(splittedRankList, score);
    }

    if (score > rankListMiddleValue && score > rankListMiddlePreviousValue) {
        const splittedRankList = rankList.slice(0, rankListMiddleIndex);

        return binarySearch(splittedRankList, score);
    }

    if (score < rankListMiddleValue && score > rankListMiddleNextValue) {
        return [rankListMiddleValue, rankListMiddleNextValue];
    }

    if (score > rankListMiddleValue && score < rankListMiddlePreviousValue) {
        return [rankListMiddlePreviousValue, rankListMiddleValue];
    }
}

function climbingLeaderboard(ranked, player) {
    const result = [];

    const myRankSet = new Set();

    for (let i = 0; i < ranked.length; i++) {
        const currentScore = ranked[i];

        if (!myRankSet.has(currentScore)) {
            myRankSet.add(currentScore);
        }
    }

    let rank = [...myRankSet];

    // Calculating rank
    for (let i = 0; i < player.length; i++) {
        const currentPlayerScore = player[i];
        const highestRankScore = rank[0];
        const lowestRankScore = rank[rank.length - 1];

        if (currentPlayerScore) {
            // If the current player score is the lowest score, put it the last position of the rank
            if (currentPlayerScore < lowestRankScore) {
                result.push(rank.length + 1);
                rank.push(currentPlayerScore);
                continue;
            }

            // If the current player score is the highest score, put it the first position of the rank
            if (currentPlayerScore >= highestRankScore) {
                if (currentPlayerScore > highestRankScore) {
                    rank.unshift(currentPlayerScore);
                }

                result.push(1);
                continue;
            }

            // If the current player score exists in the rank, get it's index position
            const indexOfPlayerScore = rank.indexOf(currentPlayerScore);

            if (indexOfPlayerScore !== -1) {
                result.push(indexOfPlayerScore + 1);
                continue;
            }

            // If none of the cases above worked, it will add the new score in the rank doing a binary search
            // binarySearch(rank, currentPlayerScore);
            const myList = binarySearch(rank, currentPlayerScore);

            for (let index = 0; index < myList.length; index++) {
                const item = myList[index];
                const nextItem = myList[index + 1];


                if (currentPlayerScore < item && currentPlayerScore > nextItem) {
                    const itemIndex = rank.indexOf(item);

                    result.push(itemIndex + 2);
                    break;
                }

                if (currentPlayerScore > item && index == 0) {
                    const itemIndex = rank.indexOf(item);

                    result.push(itemIndex - 1);
                    break;
                }

                if (currentPlayerScore < item && index == (myList.length - 1)) {
                    const itemIndex = rank.indexOf(item);

                    result.push(itemIndex + 1);
                    break;
                }
            }
        }
    }

    return result;
}

const scoresRank = [100, 100, 50, 40, 40, 20, 10];
// [100, 50, 40, 20, 10]
const playerScore = [5, 25, 50, 120];

const myFuncReturn = climbingLeaderboard(scoresRank, playerScore);

console.log('Result: ', myFuncReturn);

// return expect -> [ 6, 4, 2, 1 ]