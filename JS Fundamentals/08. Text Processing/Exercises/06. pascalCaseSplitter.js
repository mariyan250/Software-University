function solve(str) {
    str = str.split("");

    for (let i = str.length; i > 0; i--) {
        if (str[i - 1]) {
            if (str[i - 1].charCodeAt(0) >= 65 && str[i - 1].charCodeAt(0) <= 90) {
                str.splice(i - 1, 0, "");
            }
        }

    }

    console.log(str);
}