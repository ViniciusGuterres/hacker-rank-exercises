function kangaroo
    (
        firstKangorooInitialPosition,
        firstKangorooMetersPerJump,
        secondKangorooInitialPosition,
        secondKangorooMetersPerJump
    ) {

    let firstKangorooEndPosition = firstKangorooInitialPosition + firstKangorooMetersPerJump;
    let secondKangorooEndPosition = secondKangorooInitialPosition + secondKangorooMetersPerJump

    for (let i = 0; i < 10000; i++) {
        
        if (firstKangorooEndPosition == secondKangorooEndPosition) {
            return 'YES';
        }
        
        firstKangorooEndPosition += firstKangorooMetersPerJump;
        secondKangorooEndPosition += secondKangorooMetersPerJump;
    }

    return 'NO'
}

console.log(kangaroo(0, 3, 4, 2));