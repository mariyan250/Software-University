class List {
    constructor() {
        this.arr = [].sort((a, b) => a - b);
        this.size = this.arr.length;
    }

    add(element) {
        this.arr = [...this.arr, element];
        this.arr = this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }

    remove(index) {
        if (this.arr[index] != undefined) {
            let el = this.arr.splice(index, 1);
            this.arr = this.arr.filter(elx => elx != el)
            this.arr = this.arr.sort((a, b) => a - b);
            this.size = this.arr.length;
        }

    }

    get(index) {
        if (this.arr[index] != undefined) {
            return this.arr[index];
        }
    }
}