function solve(people, type, day) {

    let price = 0;
    switch (type) {
        case "Students":
            if (day == "Friday") {
                price = people * 8.45;

                if (people >= 30) {
                    price *= 0.85;
                }

            } else if (day == "Saturday") {
                price = people * 9.80;

                if (people >= 30) {
                    price *= 0.85;
                }

            } else {
                price = people * 10.46;
                if (people >= 30) {
                    price *= 0.85;
                }
            }
            break;

        case "Business":
            if (day == "Friday") {
                if (people >= 100) {
                    people -= 10;
                }
                price = people * 10.90;
            } else if (day == "Saturday") {
                if (people >= 100) {
                    people -= 10;
                }
                price = people * 15.60;
            } else {
                if (people >= 100) {
                    people -= 10;
                }
                price = people * 16;
            }
            break;

        case "Regular":
            if (day == "Friday") {
                price = people * 15;
                if (people >= 10 && people <= 20) {
                    price *= 0.95;
                }
            } else if (day == "Saturday") {
                price = people * 20;
                if (people >= 10 && people <= 20) {
                    price *= 0.95;
                }
            } else {
                price = people * 22.50;
                if (people >= 10 && people <= 20) {
                    price *= 0.95;
                }
            }
            break;

        default:
            break;

    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30, "Students", "Sunday");