function solve(password) {

    const lengthx = lengthValidator(password);
    const containx = containsValidator(password);
    const digitx = digitContainsValidator(password);

    function lengthValidator(pass) {
        return (pass.length >= 6 && pass.length <= 10) ? true : console.log("Password must be between 6 and 10 characters");
    }

    function containsValidator(pass) {

        boolx = false;

        for (let i = 0; i < pass.length; i++) {
            const letter = pass[i];
            let charCode = letter.charCodeAt();

            function checkCode(char) {
                if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || char >= 48 && char <= 57) {
                    return true;
                } else {
                    return false;
                }
            }

            if (checkCode(charCode) == true) {
                boolx = true;
            } else {
                boolx = false;
                break;
            }
        }

        return boolx ? true : console.log("Password must consist only of letters and digits");
    }

    function digitContainsValidator(pass) {
        let digits = 0;

        for (let i = 0; i < pass.length; i++) {
            const element = pass[i];

            if (element >= 0 && element <= 9) {
                digits++;
            }

            if (digits >= 2) {
                break;
            }
        }

        return digits >= 2 ? true : console.log(`Password must have at least 2 digits`);
    }

    if (lengthx && containx && digitx) {
        console.log("Password is valid");
    }
}