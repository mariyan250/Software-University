function calorieObject(arr) {
    const obj = {};

    arr.forEach((el, i) => {
        if (i % 2 == 0) {
            if (!obj.hasOwnProperty(el)) {
                obj[el] = Number(arr[i + 1]);
            }
        }
    });

    return obj;
}