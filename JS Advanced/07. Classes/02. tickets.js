function solve(arr, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = arr.reduce((acc, val) => {
        let [destination, price, status] = val.split("|");
        price = Number(price);
        const tick = new Ticket(destination, price, status);
        acc.push(tick);
        return acc;
    }, []);

    if (sorting == 'destination') {
        return result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sorting == 'price') {
        return result.sort((a, b) => a.price - b.price);
    } else {
        return result.sort((a, b) => a.status.localeCompare(b.status));
    }
}