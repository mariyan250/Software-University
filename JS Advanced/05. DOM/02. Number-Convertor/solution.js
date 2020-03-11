function solve() {
    const optionList = document.querySelector('#selectMenuTo');
    const button = document.querySelector('button');
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');

    optionList.innerHTML = `
    <select id="selectMenuTo">
    <option selected></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>
    </select>
    
    `;

    const binary = num => (num).toString(2);
    const hexa = num => (num).toString(16).toUpperCase();

    button.addEventListener('click', () => {
        if (optionList.value == 'binary') {
            result.value = binary(Number(input.value));
        } else if (optionList.value == 'hexadecimal') {
            result.value = hexa(Number(input.value));
        }
    });
}