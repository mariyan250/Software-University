function solve(input) {
    const result = input.reduce((acc, val) => {
        return [...acc, JSON.parse(val)];
    }, [])

    const createTableRow = (el) => {
        console.log('   <tr>');
        for (const x in el) {
            console.log(`       <td>${el[x]}</td>`);
        }
        console.log('   </tr>');
    }

    console.log('<table>');
    result.forEach(element => createTableRow(element));
    console.log('</table>')
}