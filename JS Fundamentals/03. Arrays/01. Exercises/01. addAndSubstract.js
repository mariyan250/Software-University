function solve(arr) {
    let sumStore = 0;
    let newArrStore = 0;

    arr.forEach(element => {
        sumStore += Number(element);
    });

    let newArr = [];
    arr.forEach((element, i) => {
        if (element % 2 == 0) {
            element += i;
        } else {
            element -= i;
        }

        newArrStore += element;
        newArr.push(element);
    });

    console.log(newArr);
    console.log(sumStore);
    console.log(newArrStore);
}