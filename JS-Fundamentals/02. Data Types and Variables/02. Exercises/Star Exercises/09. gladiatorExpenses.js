function solve(count, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldCount = 0;

    for (let index = 1; index <= count; index++) {
        if (index % 2 == 0) {
            expenses += helmetPrice;
        }
        
        if (index % 3 == 0) {
            expenses += swordPrice;
        } 

        if (index % 2 == 0 && index % 3 == 0) {
            expenses += shieldPrice;
            shieldCount++;
            if (shieldCount % 2 == 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}