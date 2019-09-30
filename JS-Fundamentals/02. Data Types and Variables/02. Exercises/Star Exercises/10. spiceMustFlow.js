function solve(yeld) {
    let count = 0;
    let spiceContainer = 0;
    let spice = 0;

    for (let i = yeld; i >= 100; i -= 10 ) {
        spice = i;
        if (spice > 0) {
            spice -= 26;
            spiceContainer += spice;
        } else {
            break;
        }
        
        count++;
    }

    if (spice > 26) {
        spiceContainer -= 26;
    }

    console.log(count);
    console.log(spiceContainer);    
}

solve(111);