(() => {
    String.prototype.ensureStart = function (str) {

        if (!this.toString().startsWith(str)) {
            return str.concat(this.toString())
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {

        if (!this.toString().endsWith(str)) {
            return this.toString().concat(str);
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this == '' ? true : false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {

            return '.'.repeat(n);

        } else if (n >= this.length) {

            return this.toString();

        } else if (n < this.length) {
            const whiteSpaceIndex = this.substr(0, n - 2).lastIndexOf(' ');

            if (whiteSpaceIndex > -1) {
                return this.substr(0, whiteSpaceIndex).concat('...');
            } else {
                return this.substr(0, n - 3).concat('...');
            }
        }

    };

    String.format = function (string) {
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace(`{${i - 1}}`, arguments[i]);
        }

        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
