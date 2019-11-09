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

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);