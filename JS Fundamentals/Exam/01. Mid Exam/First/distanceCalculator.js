function distanceCalculator(input) {
    let stepsMade = Number(input.shift());
    let stepLength = Number(input.shift());
    let distance = Number(input.shift());

    let distanceCounter = 0;

    for (let i = 1; i <= stepsMade; i++) {
        if (i % 5 == 0) {
            distanceCounter += stepLength * 0.7;
        } else {
            distanceCounter += stepLength;
        }
    }

    let percent = (distanceCounter / distance).toFixed(2);
    console.log(`You travelled ${percent}% of the distance!`);
}

distanceCalculator([5000, 7.5, 500]);