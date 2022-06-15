function gradingStudents(grades) {
    
    // round number to the next multiple of five
    const roundToNextMultipleOfFive = (number) => {
        return Math.ceil(number / 5) * 5;
    }
    
    const roundedGrades = grades.map(grade => {
        // Case grade is less than 38, don't round it
        if (grade < 38) {
            return grade;
        }
        
        // case bigger than 40, get the next multiple of 5
        const roundedGrade = roundToNextMultipleOfFive(grade);

        if ((roundedGrade - grade) < 3) {
            return roundedGrade;
        }
        
        return grade;
    });

    return roundedGrades;
    //Expected OutPut: [ 75, 67, 40, 33 ]
}

console.log(gradingStudents([ 73, 67, 38, 33 ]));
