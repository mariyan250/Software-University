class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (username == "" || salary == "" || position == "" || department == "" || salary < 0 || !username || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }

        this.departments.push({ username, salary, position, department });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        const deps = {}
        this.departments.map(o => {
            if (!deps.hasOwnProperty(o.department)) {
                deps[o.department] = [];
                deps[o.department].push(o.salary);
            } else {
                deps[o.department].push(o.salary);
            }
        });

        const depsArr = Object.keys(deps)
        let bestDepartment = '';
        const highestVal = depsArr.reduce((acc, val) => {
            const num = deps[val].reduce((x, number) => {
                x += Number(number / deps[val].length)
                return x;
            }, 0);

            if (num > acc) {
                acc = num;
                bestDepartment = val;
            }
            return acc;
        }, 0);

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${highestVal.toFixed(2)}`;
        this.departments.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(o => {
            if (o.department == bestDepartment) {
                result += `\n${o.username} ${o.salary} ${o.position}`;
            }
        });

        return result;
    }
}