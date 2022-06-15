function catAndMouse(catAPosition, catBPosition, mousePosition) {
    let winner;

    const getMouseDistance = (catposition) => {
        if (catposition > mousePosition) {
            return catposition - mousePosition;
        }

        return mousePosition - catposition;
    }

    const catADistanceFromTheMouse = getMouseDistance(catAPosition);
    const catBDistanceFromTheMouse = getMouseDistance(catBPosition);

    // Case cat A is closer to the mouse than the cat b, print "Cat A"
    if (catADistanceFromTheMouse < catBDistanceFromTheMouse) {
        winner = 'Cat A';
    }
    // Case cat B is closer to the mouse than the cat A, print "Cat B"
    else if (catBDistanceFromTheMouse < catADistanceFromTheMouse) {
        winner = 'Cat B'
    }
    // Case boths cats are the same distance than the mouse, print "Mouse C"
    else {
        winner = 'Mouse C';
    }

    return winner;
    // Expected OutPut: "Cat B"
}

console.log("🚀 ~ file: catsAndAMouse.js ~ line 2 ~ catsAndAMouse ~ catsAndAMouse", catAndMouse(1, 2, 3))

