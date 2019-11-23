function solve(arr) {

    const resultObj = {};

    arr.sort();
    arr.forEach((obj) => {
        const parsedObj = JSON.parse(obj);

        for (key in parsedObj) {
            resultObj[key] = parsedObj[key];
        }
    });

    for (key in resultObj) {
        console.log(`Term: ${key} => Definition: ${resultObj[key]}`);
    }
}