function solve(base, increment) {
    // Calculate Stairs
    let stair = base % 2;
    let stairs = Math.ceil(base / 2);

    // Calculate Height
    let finalPiramidHeight = Math.floor(stairs * increment);

    // Resources
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    // Containers for stone and marble
    let stoneBaseContainer = 0;
    let marbleBaseContainer = 0;

    // Loop over stairs 
    for (let i = 1; i <= stairs; i++) {
        let stairBase = base * base;
        let stoneBase = (base - 2) * (base - 2);

        stones += stoneBase;
        stoneBaseContainer = stoneBase;

        let marbleBase = stairBase - stoneBase;
        marbleBaseContainer = marbleBase;

        if (i % 5 == 0) {
            lapis += marbleBase;
        } else {
            marble += marbleBase;
        }

        base -= 2;
    }

    if (stair == 0) {
        marble -= marbleBaseContainer;
        gold += marbleBaseContainer;
    } else {
        stones -= stoneBaseContainer;
        gold += stoneBaseContainer;
    }

    // Re-Calculate Resources
    gold = Math.ceil(gold * increment);
    stones = Math.ceil(stones * increment);
    lapis = Math.ceil(lapis * increment);
    marble = Math.ceil(marble * increment);

    //Log Resources
    console.log(`Stone required: ${stones}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${finalPiramidHeight}`);
}

solve(11, 0.75);