function solve(num1, num2, num3) {
    let result = num1 + num2 + num3;
    let typeOfResult = result % 1 == 0? "Integer": "Float";
    console.log(`${result} - ${typeOfResult}`);
}