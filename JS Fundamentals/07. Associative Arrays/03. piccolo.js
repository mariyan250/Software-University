function piccolo(input) {

    let parking = {};

    input.forEach((element) => {
        let [direction, carNumber] = element.split(", ");

        if (direction == "IN") {
            if (!parking.hasOwnProperty(carNumber)) {
                parking[carNumber] = 1
            }
        } else if (direction == "OUT") {
            if (parking.hasOwnProperty(carNumber)) {
                delete parking[carNumber];
            }
        }
    });

    let parkingResult = Object.keys(parking).sort();

    if (parkingResult.length != 0) {
        console.log(parkingResult.join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    }
}