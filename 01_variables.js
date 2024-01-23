// value types => primative types (number,string,boolean) var
// referance types => complex types (func,array,object,regex) var
// EC6 const,let keyword tanımları geldi.

let fullname = 'ali';
const number1 = 10; // değişken değerlerimiz sabit ise const keyword tercih ederiz.
// değişken değerlerimizde aşağı satırdaki kodlarda bir değer güncellemesi varsa let keyword kullanırız.

if (true) {
	let fullname = 'can';
	console.log('block ' + fullname);
	// number1 = 14; invalid kullanım
}

console.log('global ' + fullname);

// Not: const keyword referance type değişkenlerde objenin referansını baz alır. bu sebepl obje içerisindeki property tanımlarında değer değişikliği yapabiliriz.

const person = {
	name: 'hasan',
	surname: 'tan',
}; // object literal yöntemi

person.name = 'mesut';

console.log(person);

// person = { name: 'haluk', surname: 'tan' }; // referance güncellemesi yaptık

const numbers = [1, 2, 3, 4]; // array ref
numbers = [5, 6, 7];

// let, value type değerler için değişkenin değer değişiminde kullanırız
// const ise genelde referance type değerler tercih edilir, ref bir type ramdeki ref değerini korumak için tercih edilir.