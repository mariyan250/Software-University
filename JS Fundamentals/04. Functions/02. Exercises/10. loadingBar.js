function solve(num) {
    let theNum = num / 10;

    function getPrint(num) {
        if (num < 10) {
            let dots = 10 - num;
            console.log(`${num * 10 + '% '}[${'%'.repeat(num)}${'.'.repeat(dots)}]`);
            console.log(`Still loading...`);
        } else {
            console.log(`100% Complete!`);
            console.log(`[${'%'.repeat(10)}]`);
        }
    }

    getPrint(theNum);
}

solve(30);