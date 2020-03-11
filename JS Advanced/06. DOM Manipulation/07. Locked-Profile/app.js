function lockedProfile() {
    const main = document.querySelector('#main');

    main.addEventListener('click', (e) => {
        const section = e.target.parentNode.children;
        if (section[4].checked) {
            if (e.target.tagName === "BUTTON") {
                if (section[9].style.display !== "block") {
                    section[9].style.display = 'block';
                    section[10].textContent = 'Hide it';
                } else {
                    section[9].style.display = 'none';
                    section[10].textContent = 'Show more';
                }
            }
        }
    });
}