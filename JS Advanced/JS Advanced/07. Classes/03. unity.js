class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat.hasOwnProperty('name') && otherRat.hasOwnProperty('unitedRats')) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        if (this.unitedRats.length > 0) {
            return `${this.name}\n${this.unitedRats.map(rat => `##${rat}`).join("\n")}`;
        } else {
            return this.name;
        }
    }
}