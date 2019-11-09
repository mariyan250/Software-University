function oddOcurrencies(str) {
    let elements = str.split(" ").map((element) => element.toLowerCase());
    let obj = {};

    for (let i = 0; i < elements.length; i++) {
        const token = elements[i];

        if (!obj.hasOwnProperty(token)) {
            obj[token] = 0;
        }

        obj[token] += 1;
    }

    const result = Object.keys(obj).filter(element => obj[element] % 2 != 0);

    console.log(result.join(" "));
}

oddOcurrencies('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');