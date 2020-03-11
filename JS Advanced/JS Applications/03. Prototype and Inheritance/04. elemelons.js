function solve() {
    class Melon {
        constructor(weight, melonSort) {

            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            if (new.target === Watermelon) {
                this.element = 'Water';
            }

            if (new.target === Firemelon) {
                this.element = 'Fire';
            }

            if (new.target === Earthmelon) {
                this.element = 'Earth';
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }

        morph() {
            if (this.element === 'Water') {
                this.element = 'Fire';
            } else if (this.element === 'Fire') {
                this.element = 'Earth';
            } else if (this.element === 'Earth') {
                this.element = 'Air';
            } else if (this.element === 'Air') {
                this.element = 'Water';
            }
        }
    }


    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}