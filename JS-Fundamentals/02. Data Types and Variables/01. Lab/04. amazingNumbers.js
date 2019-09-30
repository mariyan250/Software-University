function solve(num) {
    let arr = num.toString().split("");
    let sum = 0;

    for (let digit of arr) {
        sum += Number(digit);
    }

    let result = sum.toString().includes(9) ? true: false;
    console.log(`${num} Amazing? ${result == true? "True": "False"}`);
}