//Input:  totalOfSocks = 9, scoksByColors = [10, 20, 20, 10, 10, 30, 50, 10, 20])
function sockMerchant(totalOfSocks, scoksByColors) {
    let socksPairsObject = {}
    let socksPairAmount = 0;

    for (let i = 0; i < scoksByColors.length; i++) {
        const sockRow = scoksByColors[i];

        // adding socks pair at socksPairsObject, case it didn't have added yet. Case have it, sum more one.
        if (!socksPairsObject[sockRow]) {
            socksPairsObject[sockRow] = 1;
        } else {
            socksPairsObject[sockRow]++;
        }
    }

    // get the socks pairs. Case it divisible by two, sum the division result at socksPairAmount.
    // Case itsn't divisible bt two, but is bigger than one, sum the the number less one and divided by two.
    for (let sockPair in socksPairsObject) {
        const currentSocksPair = socksPairsObject[sockPair];

        if (currentSocksPair > 1) {
            if ((currentSocksPair % 2) == 0) {
                socksPairAmount += currentSocksPair / 2;
            } else {
                socksPairAmount += (currentSocksPair - 1) / 2;
            }
        }
    }

    return socksPairAmount;
    // Expect OutPut: 3
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));