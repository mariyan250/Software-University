function solve(arr) {
    let people = [];

    arr.forEach((element, i) => {
        const name = element.split(" ")[0];
        if (!element.includes("not")) {
            if (!people.includes(name)) {
                people.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (people.includes(name)) {
                let index = people.indexOf(name);
                people.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    });

    people.forEach((name) => {
        console.log(name);
    })
}