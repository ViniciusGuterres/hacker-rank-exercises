function staircase(stairSteps) {
    let stairResult = '';

    // building the stair steps
    for (let i = 1; i <= stairSteps; i++) {
        // adding spaces to format the stair
        stairResult += ' '.repeat(stairSteps - i);

        // populating '#' with the amount of step
        stairResult += '#'.repeat(i);

        // break line at the end of the string step
        stairResult += '\n';
    }

    console.log(stairResult);

    // Expected output:
    //      #
    //     ##
    //    ###
    //   ####
    //  #####
    // ######
}

console.log("🚀 ~ file: stairCase.js ~ line 2 ~ staircase ~ staircase", staircase(6))