function solve(num) {
    function isPerfect(n) {
        let sum = 1;
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                if (i * i != n) {
                    sum += i + n / i;
                } else {
                    sum += i;
                }
            }
        }

        if (sum == n && n != 1) {
            return true;
        } else {
            return false;
        }
    }

    const result = isPerfect(num);
    if (result) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);