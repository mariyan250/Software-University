function gcd(a, b) {
    while (b !== 0) {
        let tempMod = a % b;
        a = b;
        b = tempMod;
    }

    return a;
}