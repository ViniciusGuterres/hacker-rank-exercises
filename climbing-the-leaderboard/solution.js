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
        const highestRank = rank[0];
        const rankMin = rank[rank.length - 1];

        if (currentPlayerScore) {
            // 
            if (currentPlayerScore < rankMin) {
                result.push(rank.length + 1);
                rank.push(currentPlayerScore);
                continue;
            }
            
            // 
            if (currentPlayerScore >= highestRank) {
                if (currentPlayerScore > highestRank) {
                    rank.unshift(currentPlayerScore);
                }

                result.push(1);
                continue;
            }

            // 
            const indexOfPlayerScore = rank.indexOf(currentPlayerScore);

            if (indexOfPlayerScore !== -1) {
                result.push(indexOfPlayerScore + 1);
                continue;
            }


            for (let j = rank.length - 1; j > 0; j--) {
                const myCurrentRank = rank[j];
                const nextRank = rank[j - 1];

                if (
                    (currentPlayerScore > myCurrentRank)
                    && (currentPlayerScore < nextRank)
                ) {
                    result.push(j + 1);
                    // rank.uns
                    break;
                }
            }
        }
    }

    return result;
}


const ranked = [100, 100, 50, 40, 40, 20, 10];
const playerScore = [5, 25, 50, 120];

const myFuncReturn = climbingLeaderboard(ranked, playerScore);

console.log(myFuncReturn);