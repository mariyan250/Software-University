function attachEventsListeners() {
    const menu = document.querySelector('main');

    const clickHandler = (e) => {
        let days = "";
        let hours = "";
        let minutes = "";
        let seconds = "";

        switch (e.target.id) {
            case 'daysBtn': {
                const value = document.querySelector('#days').value;
                days = value;
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            }
                break;

            case 'hoursBtn': {
                const value = document.querySelector('#hours').value;
                hours = value;
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            }
                break;

            case 'minutesBtn': {
                const value = document.querySelector('#minutes').value;
                minutes = value
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            }
                break;

            case 'secondsBtn': {
                const value = document.querySelector('#seconds').value;
                seconds = value;
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }
                break;
        }

        document.querySelector('#days').value = days;
        document.querySelector('#hours').value = hours;
        document.querySelector('#minutes').value = minutes;
        document.querySelector('#seconds').value = seconds;
    };

    menu.addEventListener('click', clickHandler);
}