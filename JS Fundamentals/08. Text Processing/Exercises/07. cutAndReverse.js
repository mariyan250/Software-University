function solve(str) {
    str = str.split("");
    let first = str.slice(0, str.length / 2);
    let second = str.slice(str.length / 2);
    console.log(first.reverse().join(""));
    console.log(second.reverse().join(""));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');