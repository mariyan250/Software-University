function solve(...args) {
    const macros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    args.forEach((val) => {
        let [command, ingrediement, quantity] = val.split(' ');
        quantity = Number(quantity);
        switch (command) {
            case 'restock': {
                macros[ingrediement] += quantity;
                console.log('Success');
            }
                break;

            case 'prepare': {

            }

                break;

            case 'report': {
                console.log(`protein=${macros.protein} carboydrate=${macros.carbohydrate} fat=${macros.fat} flavour=${macros.flavour}`);
            }
        }
    });

    function checkFood(food, quantity) {
        switch (food) {
            case 'Apple':
                const carb = 1 * quantity;
                const flavour = 2 * quantity;

                break;
        }
    }
}

solve('restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report'
)