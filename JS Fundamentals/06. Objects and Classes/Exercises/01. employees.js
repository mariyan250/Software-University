function solve(arr) {
    class Emoployee {
        constructor(name, personalNum) {
            this.name = name;
            this.personalNum = personalNum;
        }
    }

    for (let name of arr) {
        const x = new Emoployee(name, name.length);
        console.log(`Name: ${x.name} -- Personal Number: ${x.personalNum}`);
    }
}