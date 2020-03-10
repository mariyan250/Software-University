function solve() {
	let input = document.querySelector('#input');
	let output = document.querySelector('#resultOutput');
	output.textContent = '';

	let result = input.value.split('')
		.filter(num => num !== '0')

	let sum = result.length;

	while (sum.toString().split('').length > 1) {
		sum = sum.toString().split('').reduce((acc, val) => Number(acc) + Number(val));
	}

	let value = input.value.slice(sum, input.value.length - sum);
	let x = value.match(/\d{8}/g);
	let left = value.length % 8;

	if (left) {
		let leftArr = value.slice(value.length - left);
		console.log(leftArr)
	}


	x.map(element => {
		return Number(parseInt(element, 2));
	})
		.forEach(num => {
			if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122) || num == 32 || num == 95) {
				output.textContent += String.fromCharCode(num);
			}
		});

	output.textContent = output.textContent.trim();
}