function cookingByNumbers(arr) {
    let digit = Number(arr.shift());
    arr.forEach(command => {
        switch (command) {
            case 'chop':
                digit = digit / 2;
                console.log(digit);
                break;

            case 'dice':
                digit = Math.sqrt(digit);
                console.log(digit);
                break;

            case 'spice':
                digit = digit + 1;
                console.log(digit);
                break;

            case 'bake':
                digit = digit * 3;
                console.log(digit);
                break;

            case 'fillet':
                digit = digit - digit * 0.2;
                console.log(digit);
                break;
        }
    });
}