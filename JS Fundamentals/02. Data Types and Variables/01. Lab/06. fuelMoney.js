function solve(distance, passengers, price) {
    let consumption = distance * (7 / 100)
    consumption += passengers * 0.100;
    let money = consumption * price;
    console.log(`Needed money for that trip is ${money.toFixed(3)} lv`)
}

solve(260, 9, 2.49);