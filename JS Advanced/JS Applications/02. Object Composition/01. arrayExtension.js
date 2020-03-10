(() => {
    Array.prototype.last = function () {
        return this.pop();
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, val) => acc + val);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();