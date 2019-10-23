function solve(arr) {
    arr.sort().sort((a, b) => a.length - b.length);
    arr.forEach((element) => {
        console.log(element);
    });
}