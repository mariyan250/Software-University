function solve(input) {
    let capacity = Number(input.shift());
    let obj = {};

    for (const line of input) {
        let row = line.split('=');

        switch (row[0]) {
            case 'Add':
                let username = row[1];
                let sentCount = Number(row[2]);
                let recievedCount = Number(row[3]);

                if (!obj.hasOwnProperty(username)) {
                    obj[username] = {
                        sent: sentCount,
                        recieved: recievedCount
                    }
                }

                break;

            case 'Message':
                let sender = row[1];
                let reciever = row[2];

                if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(reciever)) {
                    obj[sender].sent += 1;

                    if ((obj[sender].sent + obj[sender].recieved) >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete obj[sender];
                    }

                    obj[reciever].recieved += 1;
                    debugger;
                    if ((obj[reciever].recieved + obj[reciever].sent) >= capacity) {
                        console.log(`${reciever} reached the capacity!`);
                        delete obj[reciever];
                    }
                }

                break;

            case 'Empty':
                let usernameToRemove = row[1];

                if (usernameToRemove == "All") {
                    obj = {};
                } else if (obj.hasOwnProperty(usernameToRemove)) {
                    delete obj[usernameToRemove];
                }

                break;
        }
    }

    console.log(`Users count: ${Object.keys(obj).length}`);
    Object.keys(obj).sort((a, b) => obj[b].recieved - obj[a].recieved || a.localeCompare(b)).forEach(person => {
        console.log(`${person} - ${obj[person].sent + obj[person].recieved}`);
    });
}