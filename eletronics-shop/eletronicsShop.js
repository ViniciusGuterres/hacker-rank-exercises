function getMoneySpent(keyboards, drives, budget) {
    let moastExpensive =  -1;

    for (let i = 0; i < keyboards.length; i++) {
        const keyboardRow = keyboards[i];

        for(let j = 0; j < drives.length; j++) {
            const driveRow = drives[j];
            
            const driveAndKeyboardPrice = keyboardRow + driveRow;

            if (driveAndKeyboardPrice > moastExpensive && driveAndKeyboardPrice <= budget) {
                moastExpensive = driveAndKeyboardPrice;
            }
        }
    }
   
    return moastExpensive;
    // Expect OutPut: 58
}

const keyboards = [40, 50, 60];
const drives = [5, 8, 1];
const budget = 60;

console.log("🚀 ~ RESULT::", getMoneySpent(keyboards, drives, budget));
