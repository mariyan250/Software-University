function encodeAndDecodeMessages() {
    const encode = document.querySelector('#main div:nth-child(1) textarea');
    const decode = document.querySelector('#main div:nth-child(2) textarea');
    const main = document.querySelector('#main');

    const encodeMessage = message => {
        const transferMsg = message.split('').map(letter => {
            return String.fromCharCode(letter.charCodeAt(0) + 1);
        }).join('');

        encode.value = '';
        decode.value = transferMsg;
    }

    const decodeMessage = message => {
        const transferMsg = message.split('').map(letter => {
            return String.fromCharCode(letter.charCodeAt(0) - 1);
        }).join('');

        decode.value = transferMsg;
    }

    main.addEventListener('click', (e) => {
        if (e.target === document.querySelector('#main div:nth-child(1) button')) {
            encodeMessage(encode.value);
        } else if (e.target === document.querySelector('#main div:nth-child(2) button')) {
            decodeMessage(decode.value);
        }
    });
}