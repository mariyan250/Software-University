function solve(day, age) {
    let money = 0;
    if (day == "Weekday") {
        if (age >= 0 && age <= 18) {
            money = 12;
        } else if (age > 18 && age <= 64) {
            money = 18;
        } else if (age > 64 && age <= 122) {
            money = 12;
        }
    } else if (day == "Weekend") {
        if (age >= 0 && age <= 18) {
            money = 15;
        } else if (age > 18 && age <= 64) {
            money = 20;
        } else if (age > 64 && age <= 122) {
            money = 15;
        }
    } else if (day == "Holiday") {
        if (age >= 0 && age <= 18) {
            money = 5;
        } else if (age > 18 && age <= 64) {
            money = 12;
        } else if (age > 64 && age <= 122) {
            money = 10;
        }
    }

    if (money) {
        console.log(`${money}$`);
    } else {
        console.log("Error!");
    }
}