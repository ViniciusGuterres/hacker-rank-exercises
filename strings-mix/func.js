function mix(s1, s2) {
    let maximumLettersObj = {};
    let s1AmountOfLettersObj = loopLetter(s1);
    let s2AmountOfLettersObj = loopLetter(s2);

    console.log('s1::', s1AmountOfLettersObj);
    console.log('s2::', s2AmountOfLettersObj);
}

function loopLetter(stringL) {
    let obj = {};


    for (let i = 0; i < stringL.length; i++) {
        let letterRow = stringL[i];

        if (letterRow != ' ' && letterRow == letterRow.toLowerCase()) {
            // verify if it's letter first occurrence, case true create a letter key at obj with value one, otherwise sum at obj key
            if (obj[letterRow]) {
                obj[letterRow] += 1;
            } else {
                obj[letterRow] = 1;
            }
        }
    }
    
    return obj;
}

mix("A aaaa bb c", "& aaa bbb c d");

    // 1° - Count how many times a lower case letter appers on each string

    // 2° - Get the maximum letters comparing the amount of the both strings