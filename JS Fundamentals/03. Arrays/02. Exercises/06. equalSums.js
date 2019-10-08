function solve(arr) {
    let isOne = false;
    let isTrue = false;

    for (let index = 0; index < arr.length; index++) {
        if (arr.length == 1) {
            isOne = true;
            console.log(0);
            break;
        }

        const firstArr = arr.slice(0, index);
        const secondArr = arr.slice(index + 1);

        let firstArrSum = 0;
        let secondArrSum = 0;

        firstArr.forEach(element1 => {
            firstArrSum += Number(element1);
        });
        secondArr.forEach(element2 => {
            secondArrSum += Number(element2);
        });


        if (firstArrSum == secondArrSum) {
            isTrue = true;
            console.log(index);
            break;
        } else {
            isTrue = false;
        }
    }

    if (isOne == false && isTrue == false) {
        console.log("no");
    }
}
