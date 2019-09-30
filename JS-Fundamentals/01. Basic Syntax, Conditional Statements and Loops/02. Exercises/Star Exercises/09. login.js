function solve(data) {
    let username = data.shift();
    let password = username.split("").reverse().join("");
    let counter = 0;
    
    for (pswd of data) {
        if (pswd == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log(`Icorrect password. Try again.`);
            counter++;
        }

        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}