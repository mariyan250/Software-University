function toggle() {
    let extra = document.querySelector('#extra').style;
    let btn = document.querySelector('.button');

    if (extra.display === 'none') {
        extra.display = 'block';
        btn.textContent = 'Less';
    } else {
        extra.display = 'none';
        btn.textContent = 'More';
    }
}