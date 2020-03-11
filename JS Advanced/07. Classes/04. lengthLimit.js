class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(lengthIncrease) {
        this.innerLength += lengthIncrease;
    }

    decrease(lengthDecrease) {
        this.innerLength -= lengthDecrease;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength == this.innerString.length) {
            return this.innerString;
        } else if (this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.split("").splice(0, this.innerLength).join("");
            return `${this.innerString}...`;
        } else {
            return `...`;
        }
    }
}