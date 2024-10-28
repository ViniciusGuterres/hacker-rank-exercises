function camelcase(s) {
    return s.split(/[A-Z]/).length;    
}

const string = 'oneTwoThree';

const result = camelcase(string);
console.log("🚀 ~ result:", result)
// Expected output: 3