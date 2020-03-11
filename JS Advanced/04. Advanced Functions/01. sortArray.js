function solve(arr, option) {
    function sort(option) {
        if (option == "asc") {
            return arr.sort((a, b) => a - b);
        }
        return arr.sort((a, b) => b - a);
    }

    return sort(option);
}