function designerPdfViewer(h, word) {
    const wordArray = word.split('');
    const a = 97;

    const myAlphabetDictionary = {};

    h.forEach((item, index) => {
        myAlphabetDictionary[String.fromCharCode(a + index)] = item;
    });

    let highestWordValue = myAlphabetDictionary[wordArray[0]];

    for (let i = 1; i < wordArray.length; i++) {
        const currentWordHeight = myAlphabetDictionary[wordArray[i]];

        if (currentWordHeight > highestWordValue) {
            highestWordValue = currentWordHeight;
        }
    }

    return highestWordValue * (wordArray.length);
}

const myArr = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const myWord = 'abc';

const result = designerPdfViewer(myArr, myWord);

// Expected output is "9"
console.log("🚀 ~ result:", result)
