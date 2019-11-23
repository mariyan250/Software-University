function solve(numStart, numEnd) {
    let value = 0;
    let numsContainer = "";

    for (let i = numStart; i <= numEnd; i++) {
        value += i;
        let nums = i;
        numsContainer += nums + " ";
    }

    console.log(numsContainer);
    console.log(`Sum: ${value}`);
}