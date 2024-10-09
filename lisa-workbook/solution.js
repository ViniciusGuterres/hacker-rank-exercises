function workbook(numberOfChapters, maxProblemsPerPage, arr) {
    let currentChapter = {
        chapter: 1,
        lastAddedProblemID: 0,
        remainingProblemsAmount: arr[0],
    };

    let currentPage = 1;
    let specialProblemCounter = 0;

    const goToNextChapter = () => {
        currentChapter.chapter++;
        currentChapter.lastAddedProblemID = 0;
        currentChapter.remainingProblemsAmount = arr[currentChapter.chapter - 1];
    }

    while (currentChapter.chapter <= numberOfChapters) {
        const { lastAddedProblemID, remainingProblemsAmount } = currentChapter;
        // const chapterTotalOfProblems = arr[chapter - 1];

        let currentPageAddedProblemsAmount = 0;

        if (remainingProblemsAmount <= maxProblemsPerPage) {
            currentPageAddedProblemsAmount = remainingProblemsAmount;
        } else if (remainingProblemsAmount > maxProblemsPerPage) {
            currentPageAddedProblemsAmount = maxProblemsPerPage;
        } else {
            currentPageAddedProblemsAmount = remainingProblemsAmount - maxProblemsPerPage;
        }

        // // Add a new special problem
        if (lastAddedProblemID === 0) {
            if (currentPageAddedProblemsAmount >= currentPage) {
                specialProblemCounter++;
            }
        } else {
            const initialProblemID = lastAddedProblemID + 1;
            const finalProblemID = (initialProblemID + currentPageAddedProblemsAmount) - 1;

            if (initialProblemID <= currentPage && finalProblemID >= currentPage) {
                specialProblemCounter++;
            }
        }

        // 
        currentChapter.remainingProblemsAmount = remainingProblemsAmount - currentPageAddedProblemsAmount;
        currentChapter.lastAddedProblemID += currentPageAddedProblemsAmount;

        // Go to the next chapter
        if (currentChapter.remainingProblemsAmount === 0) {
            goToNextChapter();
        }

        // Go to the next page
        currentPage++;
    }

    return specialProblemCounter;
}

// const numberOfChapters = 5;
// const maxPerPage = 3;
// const arr = [4, 2, 6, 1, 10];

const numberOfChapters = 10;
const maxPerPage = 5;
const arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31];

const result = workbook(numberOfChapters, maxPerPage, arr);

// Expected output: 8
console.log("🚀 ~ result:", result);