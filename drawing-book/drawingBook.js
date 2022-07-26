// Input 6, 2
function pageCount(totalPages, targetPage) {
    let frontSideFlippedPagesCount = 0;
    let backSideFlippedPagesCount = 0;

    let frontSideCurrentPages = 1;
    let backSideCurrentPages = totalPages % 2 ? totalPages - 1 : totalPages;

    for (let i = 0; i < totalPages; i += 2) {
        if ((frontSideCurrentPages >= targetPage) || (backSideCurrentPages <= targetPage)) {
            return frontSideFlippedPagesCount < backSideFlippedPagesCount ? 
                frontSideFlippedPagesCount : backSideFlippedPagesCount;
        }

        frontSideFlippedPagesCount++;
        backSideFlippedPagesCount++;

        frontSideCurrentPages = frontSideCurrentPages + 2;
        backSideCurrentPages = backSideCurrentPages -= 2;
    }
}
// Expect OutPut 1


console.log(pageCount(6, 2));