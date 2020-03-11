function roadRadar([speed, zone]) {
    switch (zone) {
        case 'motorway': {
            let limit = 130;
            if (speed > limit) {
                let left = speed - limit;
                if (left <= 20) {
                    console.log('speeding');
                } else if (left > 20 && left <= 40) {
                    console.log('excessive speeding');
                } else {
                    console.log('reckless driving ');
                }
            }
        }
            break;

        case 'interstate': {
            let limit = 90;
            if (speed > limit) {
                let left = speed - limit;
                if (left <= 20) {
                    console.log('speeding');
                } else if (left > 20 && left <= 40) {
                    console.log('excessive speeding');
                } else {
                    console.log('reckless driving ');
                }
            }
        }
            break;

        case 'city': {
            let limit = 50;
            if (speed > limit) {
                let left = speed - limit;
                if (left <= 20) {
                    console.log('speeding');
                } else if (left > 20 && left <= 40) {
                    console.log('excessive speeding');
                } else {
                    console.log('reckless driving ');
                }
            }
        }
            break;

        case 'residential': {
            let limit = 20;
            if (speed > limit) {
                let left = speed - limit;
                if (left <= 20) {
                    console.log('speeding');
                } else if (left > 20 && left <= 40) {
                    console.log('excessive speeding');
                } else {
                    console.log('reckless driving ');
                }
            }
        }
            break;
    }
}

roadRadar([21, 'residential'])