function solve(input) {
    let participantsList = input.shift().split(", ");
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        const token = input[i];

        if (token == "end of race") {
            break;
        }

        const name = token.match(/[A-Za-z]+/g).join("");
        const distance = token.match(/\d+/g);

        if (name && distance) {
            const playerDistance = distance.join("").split("").reduce((a, b) => Number(a) + Number(b));

            if (participantsList.includes(name)) {
                if (obj.hasOwnProperty(name)) {
                    obj[name] += playerDistance;
                } else {
                    obj[name] = playerDistance;
                }
            }
        }
    }

    const result = Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, 3);
    result.forEach((player, i) => {
        if (i == 0) {
            console.log(`1st place: ${player}`);
        } else if (i == 1) {
            console.log(`2nd place: ${player}`);
        } else {
            console.log(`3rd place: ${player}`);
        }
    });
}