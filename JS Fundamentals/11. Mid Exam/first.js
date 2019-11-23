function solve(input) {
    let month = 30;
    let biscuitsPerDay = Number(input.shift());
    let workers = Number(input.shift());
    let biscuitsConcurency = Number(input.shift());

    let biscuits = 0;

    for (let i = 0; i < month; i++) {
        if (i % 3 == 0) {
            biscuits += Math.floor(workers * (biscuitsPerDay * 0.75));
        } else {
            biscuits += Math.floor(workers * biscuitsPerDay);
        }
    }

    console.log(`You have produced ${biscuits} biscuits for the past month.`);

    let difference = 0

    if (biscuits != biscuitsConcurency) {
        if (biscuits > biscuitsConcurency) {
            difference = biscuits - biscuitsConcurency;
        }

        if (biscuitsConcurency > biscuits) {
            difference = biscuitsConcurency - biscuits;
        }

        if (biscuits > biscuitsConcurency) {
            let percent = ((difference / biscuitsConcurency) * 100).toFixed(2);
            console.log(`You produce ${percent} percent more biscuits.`);
        } else {
            let percent = ((difference / biscuitsConcurency) * 100).toFixed(2);
            console.log(`You produce ${percent} percent less biscuits.`);
        }
    }
}