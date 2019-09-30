function solve(n) {
    let sum = 0;
    let start = 1;
    
    for (let i = 1; i <= n; i++) {
        console.log(start);
        sum += start;
        start += 2;
    }

    console.log(`Sum: ${sum}`);
}