function solve(input) {
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let token = input[i].match(/(.+)>[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]+<\1/g);

        if (token == input[i]) {
            let result = input[i].split(/(.+)>/g);
            let secondResult = result[2].split(/<(.+)/g);;

            console.log(`Password: ${secondResult[0].split("|").join("")}`);

        } else {
            console.log("Try another password!");
        }
    }
}