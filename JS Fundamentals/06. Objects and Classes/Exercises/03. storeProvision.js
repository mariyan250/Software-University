function solve(arr1, arr2) {

    let availableProducts = restock(arr1, {});
    let productsAfterDelivery = restock(arr2, availableProducts);

    for (let product of Object.keys(productsAfterDelivery)) {
        console.log(`${product} --> ${productsAfterDelivery[product]}`);
    }

    function restock(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {

            const product = arr[i];
            const price = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = price;
            } else {
                obj[product] += price;
            }
        }

        return;
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);