function solve(n) {
    let container = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            container += i + ' ';
        }
        container += "\n";
    }

    console.log(container);
}