function searchNumber(arr, arr2) {
    const [takeElement, elementsNumber, number] = arr2;
    const newArr = arr.slice(0, takeElement);
    newArr.splice(0, elementsNumber);

    let counter = 0;

    newArr.forEach((element) => {
        if (element === number) {
            counter++;
        }
    });

    console.log(`Number ${number} occurs ${counter} times.`);
}