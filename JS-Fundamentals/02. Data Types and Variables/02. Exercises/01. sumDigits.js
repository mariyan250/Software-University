function solve(num) {
    let nums = num.toString().split("");
    let result = 0;

    for (num of nums) {
        result += Number(num);
    }

    console.log(result);
}