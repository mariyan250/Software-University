function solve(arr) {
    let maxItem = 0;
    let itemsCount = 0;
    let theSequence = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (arr[i] == arr[i - 1]) {
            itemsCount++;
            if (itemsCount > maxItem) {
                maxItem = itemsCount;
                theSequence = arr.slice(i - maxItem + 1, i + 1);
            }
           
        } else {
            itemsCount = 1;
        }
    }

    console.log(theSequence.join(" "));
}

solve([3,2,3,3,3,2,2,1])