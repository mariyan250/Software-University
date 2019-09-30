function solve(year, month, day) {
    let date = new Date(year, month - 1 , day);
    date.setDate(date.getDate() + 1);

    let years = date.getFullYear();
    let months = date.getMonth();
    let days = date.getDate();

    console.log(`${years}-${months + 1}-${days}`)
}