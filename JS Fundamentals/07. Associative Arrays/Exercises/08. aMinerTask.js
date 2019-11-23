function minerTask(input) {
    let obj = {};

    input.forEach((element, index) => {
        if (index % 2 == 0) {
            if (!obj.hasOwnProperty(element)) {
                obj[element] = Number(input[index + 1]);
            } else {
                obj[element] += Number(input[index + 1]);
            }
        }
    });

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}