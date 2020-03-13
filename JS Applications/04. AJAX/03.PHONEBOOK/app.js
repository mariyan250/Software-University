function attachEvents() {
    const btnLoad = document.querySelector('#btnLoad');
    const phonebook = document.querySelector('#phonebook');
    const createButton = document.querySelector('#btnCreate');
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');

    const handleDelete = async (e) => {
        const i = e.target.parentNode.getAttribute('i');
        await fetch(`https://remotedb-6a1f6.firebaseio.com/phonebook/${i}.json`, {
            method: 'DELETE'
        });
        location.reload();
    }

    const handleLoad = async () => {
        const res = await fetch('https://remotedb-6a1f6.firebaseio.com/phonebook.json');
        const data = await res.json();

        if (data) {
            Object.entries(data).forEach(([i, user]) => {
                if (i != null && user != null) {
                    const li = document.createElement('li');
                    li.setAttribute('i', i);
                    li.textContent = `${user.person}: ${user.phone}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', handleDelete);

                    li.appendChild(deleteButton);
                    phonebook.appendChild(li);
                }
            });
        }
    }

    btnLoad.addEventListener('click', handleLoad);

    const handleCreate = async () => {
        await fetch('https://remotedb-6a1f6.firebaseio.com/phonebook.json', {
            method: 'POST',
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value
            })
        });

        personInput.value = '';
        phoneInput.value = '';
    }

    createButton.addEventListener('click', handleCreate);
}

attachEvents();