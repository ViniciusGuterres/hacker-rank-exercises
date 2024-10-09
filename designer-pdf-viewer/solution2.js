function designerPdfViewer(h, word) {
    const a = 97;
    let highestWordValue = 0;

    for (let i = 0; i < word.length; i++) {        
        const wordHeight = h[word.charCodeAt(i) - a];
        highestWordValue = Math.max(highestWordValue, wordHeight);
    }

    return highestWordValue * (word.length);
}

const myArr = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const myWord = 'abc';

const result = designerPdfViewer(myArr, myWord);

// Expected output is "9"
console.log("🚀 ~ result:", result)
