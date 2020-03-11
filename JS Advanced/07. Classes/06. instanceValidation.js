class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        if (clientId.match(/^\d{6}$/gm)) {
            this.clientId = clientId;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        if (email.match(/\w+@[A-Za-z]+.[A-Za-z]+/gm)) {
            this.email = email;
        } else {
            throw new TypeError('Invalid e-mail');
        }

        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else {
            this.firstName = firstName;
        }

        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else {
            this.lastName = lastName;
        }

        if (firstName.split("").every(element => element.match(/[A-Za-z]/gm))) {
            this.firstName = firstName;
        } else {
            throw new TypeError('First name must contain only Latin characters');
        }

        if (lastName.split("").every(element => element.match(/[A-Za-z]/gm))) {
            this.lastName = lastName;
        } else {
            throw new TypeError('Last name must contain only Latin characters');
        }
    }
}