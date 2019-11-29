function solve(input) {
    let obj = {};

    for (const line of input) {
        if (line == "END") {
            break;
        }

        let row = line.split("->");
        switch (row[0]) {
            case 'Add':
                let road = row[1];
                let racer = row[2];

                if (!obj.hasOwnProperty(road)) {
                    obj[road] = [];
                    obj[road].push(racer);
                } else {
                    obj[road].push(racer);
                }

                break;

            case 'Move':
                let currentRoad = row[1];
                let racerName = row[2];
                let nextRoad = row[3];

                if (obj[currentRoad] && obj[nextRoad]) {
                    if (obj[currentRoad].includes(racerName)) {
                        let indexToRemove = obj[currentRoad].indexOf(racerName);
                        obj[currentRoad].splice(indexToRemove, 1);
                        obj[nextRoad].push(racerName);
                    }
                }

                break;

            case 'Close':
                let roadToRemove = row[1];

                if (obj.hasOwnProperty(roadToRemove)) {
                    delete obj[roadToRemove];
                }

                break;
        }
    }
    console.log('Practice sessions:');
    Object.keys(obj).sort((a, b) => obj[b].length - obj[a].length || a.localeCompare(b)).forEach(road => {
        console.log(road);
        obj[road].forEach(racer => {
            console.log(`++${racer}`);
        });
    });
}