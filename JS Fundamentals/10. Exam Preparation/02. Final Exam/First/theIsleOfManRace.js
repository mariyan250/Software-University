function solve(names) {
    for (const name of names) {
        let regex = /^([#\$%\*&])[A-Za-z]+\1=([0-9]+)!!(.+)$/gm;

        if (name.match(regex)) {
            let match = regex.exec(name);
            let [geoLength, geoHash] = match.slice(2);
            geoLength = Number(geoLength);

            if (geoHash.length == geoLength) {
                let racer = name.match(/([#\$%\*&])[A-Za-z]+\1/g)[0].split('');
                racer.shift();
                racer.pop();
                racer = racer.join('');

                geoHash = geoHash.split('').map(symbol => {
                    let code = Number(symbol.charCodeAt(0));
                    return String.fromCharCode(code + geoLength);

                }).join('');
                console.log(`Coordinates found! ${racer} -> ${geoHash}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!')
        }
    }
}