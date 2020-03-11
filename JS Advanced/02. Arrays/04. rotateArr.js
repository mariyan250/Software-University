function solve(input) {
    let reverseTimes = input.pop() % input.length;

    for (let i = 0; i < reverseTimes; i++) {
        let removed = input.pop();
        input.unshift(removed);
    }

    console.log(input.join(" "));
}