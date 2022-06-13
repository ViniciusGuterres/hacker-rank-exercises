function countApplesAndOranges(
    houseStartPoint,
    houseEndPoint,
    appleTreeLocation,
    orangeTreeLocation,
    fallenApplesDistanceArray,
    fallenOrangesDistanceArray
) {
    let houseFallenApples = 0;
    let houseFallenOranges = 0;

    const haveFruitFellOutTheHouseRange = fruitFallenDistance => {
        if (fruitFallenDistance >= houseStartPoint && fruitFallenDistance <= houseEndPoint) {
            return true;
        }

        return false;
    }

    // the apple tree is on the left of the house
    houseFallenApples = fallenApplesDistanceArray.filter(apple => {
        const appleFallDistance = appleTreeLocation + apple;

        // get the apples that fell out to the right (positives)
        // filter just the positives apples
        if (apple > 0) {
            // return the apple if the fruit fell out the house range
            if (haveFruitFellOutTheHouseRange(appleFallDistance)) {
                return apple;
            }
        }
    });

    // the orange tree is on the right of the house
    houseFallenOranges = fallenOrangesDistanceArray.filter(orange => {
        const orangeFallDistance = orangeTreeLocation + orange;

        // get the oranges that fell out to the left (negatives)
        // filter just the negatives oranges
        if (orange < 0) {
            // return the orange if the fruit fell out the house range
            if (haveFruitFellOutTheHouseRange(orangeFallDistance)) {
                return orange;
            }
        }
    })

    console.log(houseFallenApples.length);
    console.log(houseFallenOranges.length);
    // Expected OutPut:
    // 1
    // 1
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);