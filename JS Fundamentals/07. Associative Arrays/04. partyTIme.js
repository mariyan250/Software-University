function partyTime(input) {

    let partyList = {
        vip: [],
        regular: []
    };

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let commingGuests = input.slice(partyIndex + 1);

    for (let guest of guestList) {
        if (Number.isInteger(+guest[0])) {
            partyList.vip.push(guest);
        } else {
            partyList.regular.push(guest);
        }
    }

    for (let guest of commingGuests) {
        if (partyList.vip.includes(guest)) {
            let guestIndex = partyList.vip.indexOf(guest);
            partyList.vip.splice(guestIndex, 1);
        } else if (partyList.regular.includes(guest)) {
            let guestIndex = partyList.regular.indexOf(guest);
            partyList.regular.splice(guestIndex, 1);
        }
    }

    console.log(partyList.vip.length + partyList.regular.length);
    partyList.vip.forEach((g) => console.log(g));
    partyList.regular.forEach((g) => console.log(g));
}