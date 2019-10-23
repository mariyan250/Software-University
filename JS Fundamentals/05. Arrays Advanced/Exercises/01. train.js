function solve(arr) {

    let wagons = arr[0].split(' ').map(Number);
    let maxCapacity = +(arr[1]);
    let comands = arr.slice(2);

    for (let cmd of comands) {

        let token = cmd.split(" ");

        if (token.length === 2) {
            wagons.push(+(token[1]));
        } else {

            let passengersToFit = +(token[0]);

            for (let index in wagons) {
                let availableCapacity = maxCapacity - wagons[index];

                if (availableCapacity >= passengersToFit) {
                    wagons[index] += passengersToFit;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}