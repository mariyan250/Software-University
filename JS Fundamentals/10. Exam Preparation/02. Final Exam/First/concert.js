function solve(input) {
    let obj = {};
    let lastLine = '';

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        if (line == "start of concert") {
            lastLine = input[i + 1];
            break;
        }

        let row = line.split('; ');

        switch (row[0]) {
            case 'Add':
                let bandName = row[1];
                let members = row.slice(2);

                members[0].split(', ').forEach(member => {
                    if (!obj.hasOwnProperty(bandName)) {
                        obj[bandName] = {};
                        obj[bandName].members = []
                        obj[bandName].time = 0;

                        if (!obj[bandName].members.includes(member)) {
                            obj[bandName].members.push(member);
                        }
                    } else {
                        if (!obj[bandName].members.includes(member)) {
                            obj[bandName].members.push(member);
                        }
                    }
                });

                break;

            case 'Play':
                let band = row[1];
                let playTime = Number(row[2]);

                if (!obj.hasOwnProperty(band)) {
                    obj[band] = {};
                    obj[band].members = [];
                    obj[band].time = playTime;
                } else {
                    obj[band].time += playTime;
                }

                break;
        }
    }

    let time = 0;

    Object.keys(obj).forEach(group => {
        time += obj[group].time;
    });

    console.log(`Total time: ${time}`);

    Object.keys(obj).sort((a, b) => obj[b].time - obj[a].time || a.localeCompare(b)).forEach(x => {
        if (obj[x].time > 0 && obj[x].members.length > 0) {
            console.log(`${x} -> ${obj[x].time}`);
        }
    });

    console.log(lastLine);
    obj[lastLine].members.forEach(member => {
        console.log(`=> ${member}`)
    });
}