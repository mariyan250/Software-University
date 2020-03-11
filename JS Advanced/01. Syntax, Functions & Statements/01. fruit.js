function fruit(fruit, weight, money) {
    let sum = money * (weight / 1000);
    return `I need $${sum.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`
}