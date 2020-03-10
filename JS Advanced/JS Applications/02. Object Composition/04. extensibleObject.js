function solve() {
    const myObj = {
        extend: function (template) {
            console.log(this);
            Object.keys(template).map(key => {
                if (typeof template[key] == 'function') {
                    const prototype = Object.getPrototypeOf(myObj);
                    prototype[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            })
        }
    }

    return myObj;
}