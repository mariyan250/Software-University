function sorting(array) {
    let ascending = array.slice().sort((a, b) => a - b);
    let descending = array.slice().sort((a, b) => b - a)

    let output = [];

    for (let i = 0; i < array.length; i++) {

        if (i % 2 === 0) {
            output.push(descending.shift());
        } else {
            output.push(ascending.shift())
        }
    }

    console.log(output.join(' '));
}