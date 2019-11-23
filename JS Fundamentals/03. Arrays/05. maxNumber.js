function solve(arr) {
    let outputArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let rightElement = arr.slice(i + 1);

        let isBigger = true;
        for (let s = 0; s < rightElement.length; s++) {
            if (currentElement < rightElement[s]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            if (!outputArr.includes(currentElement)) {
                outputArr.push(currentElement);
            }

        }
    }

    console.log(outputArr.join(" "));
}