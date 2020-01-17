function solve(input) {
    let initialNumber = 1;
    let result = [];

    input.forEach(row => {
        if (row == "add") {
            result.push(initialNumber);
        } else {
            result.pop();
        }
        initialNumber++;
    });

    if (result.length > 0) {
        result.forEach(row => {
            console.log(row);
        });
    } else {
        console.log(`Empty`)
    }
}