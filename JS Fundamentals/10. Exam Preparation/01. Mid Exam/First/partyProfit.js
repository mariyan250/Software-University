function partyProfit(input) {
    let [partySize, days] = input;

    let coins = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 10 == 0) {
            partySize -= 2;
        }

        if (i % 15 == 0) {
            partySize += 5;
        }

        if (i % 3 == 0) {
            coins -= 3 * partySize;
        }

        if (i % 5 == 0 && i % 3 == 0) {
            coins += 20 * partySize;
            coins -= 2 * partySize;
        } else if (i % 5 == 0) {
            coins += 20 * partySize;
        }

        coins += 50;
        coins -= 2 * partySize;
    }

    console.log(`${partySize} companions received ${Math.floor(coins / partySize)} coins each.`);
}