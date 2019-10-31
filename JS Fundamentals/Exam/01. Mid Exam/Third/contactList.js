function contactList(input) {
    let contacts = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let name = command[0];

        switch (name) {
            case "Add":
                let addContact = command[1];
                let index = Number(command[2]);

                if (!contacts.includes(addContact)) {
                    contacts.push(addContact);
                } else {
                    if (contacts[index]) {
                        contacts.splice(index, 0, addContact)
                    }
                }

                break;

            case "Remove":
                let indexToRemove = Number(command[1]);
                if (contacts[indexToRemove]) {
                    contacts.splice(indexToRemove, 1);
                }

                break;

            case "Export":
                let startIndex = Number(command[1]);
                let count = Number(command[2]);

                contactsToPrint = []

                if ((startIndex + count) > contacts.length) {
                    contactsToPrint = contacts.slice(startIndex);
                } else {
                    contactsToPrint = contacts.slice(startIndex, startIndex + count);
                }

                console.log(contactsToPrint.join(" "));

                break;

            case "Print":
                let way = command[1];

                if (way == "Normal") {
                    console.log(`Contacts: ${contacts.join(" ")}`);
                } else {
                    console.log(`Contacts: ${contacts.reverse().join(" ")}`);
                }

                break;
        }
    }
}

contactList([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
]);