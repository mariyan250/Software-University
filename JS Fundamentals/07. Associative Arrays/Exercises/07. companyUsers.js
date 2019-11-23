function companyUser(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        const [companyName, employeeId] = input[i].split(" -> ");

        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = [];
            obj[companyName].push(employeeId);
        } else {
            if (!obj[companyName].includes(employeeId)) {
                obj[companyName].push(employeeId);
            }
        }
    }

    Object.keys(obj).sort().forEach((k) => {
        console.log(k);
        obj[k].forEach((x) => {
            console.log(`-- ${x}`);
        });
    });
}