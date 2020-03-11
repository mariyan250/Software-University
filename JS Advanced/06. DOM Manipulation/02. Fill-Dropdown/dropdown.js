function addItem() {
    const menu = document.querySelector('#menu');
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');

    const option = document.createElement('option');
    option.value = value.value;
    option.textContent = text.value;
    menu.appendChild(option);
    text.value = "";
    value.value = "";
}