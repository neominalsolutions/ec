// default function tanımı
function sum(number1, number2) {
	console.log(typeof number1); // hangi tipte tanımlanmış
	console.log(typeof number2);
	return number1 + number2;
}

// undefined => değer tanımı yapılmış ama değer ataması yapılmamış
let a;
console.log('a:' + typeof a);

console.log(sum()); // NaN, (Not a Number)
console.log(sum(10));
console.log(sum(10, 5));
console.log(sum('10.5', 5.5)); // 16
console.log(sum('30', '50')); // 80
console.log(sum('30', true));

// js function overload yok, typescript function overload yok.

function sum(a, b) {
	// == değer eşitliği === değer ve tip eşitliği

	if (typeof a === 'string' && !isNaN(a)) {
		a = parseFloat(a);
	}

	if (typeof b === 'string' && !isNaN(b)) {
		b = parseFloat(b);
	}

	if (typeof a !== 'number') {
		a = 0;
	}

	if (typeof b !== 'number') {
		b = 0;
	}

	return a + b;
}

// ES6 ile arrow function yöntemi
const multiplier = (a, b) => a * b; // short version
// const multiplier = (b, c) => b * c;
// Not: functionlarda let kullanımı function referansı güncellememizi sağlar. bu sebeple let kullanımı arrow functionda önerilmez.
// multiplier = (k, l, c) => k * l * c;
// const keyword, arrayi object ve function da kullandığımız bir tanımlama

// not recommended
let multiplier2 = (a, b) => {
	// long version
	return a * b;
};

const showMessage = (message) => {
	console.log(message);
};

console.log('carpım:' + multiplier(1, 3, 5));
showMessage('merhaba');
