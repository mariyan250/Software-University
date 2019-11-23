function solve(arr) {
    let heroContainer = [];

    for (let item of arr) {
        let [name, level, items] = item.split(" / ");
        items = items.split(", ").sort().join(", ");

        const hero = {
            name,
            level,
            items
        }

        heroContainer.push(hero);
    }

    heroContainer.sort((a, b) => a.level - b.level);
    heroContainer.forEach((hero) => {

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}