function solve(arr) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    for (let element of arr) {
        const el = element.split(" | ");
        let name = el[0];
        let latitude = Number(el[1]).toFixed(2);
        let longitude = Number(el[2]).toFixed(2);

        const town = new Town(name, latitude, longitude);
        console.log(`{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
    }
}