// ES5 function construction yöntemi

// class

const employee = { name: 'ali' }; // buda bir obje tanımkı
const car = new Object();
car.plate = '34 KA 3245';

function Person(name, surname) {
	age = 10; // field private alanlar
	console.log('age' + age);

	this.name = name; // this. C# daki public keyword denk gelir.
	// return name + " " + surname;
	this.surname = surname;

	// method
	this.getfullname = function () {
		return `${name} ${surname.toUpperCase()}`;
	};
}

Person.prototype.setName = function (name) {
	this.name = name;
};

const p = new Person('ali', 'can');
p.name = 'taner';
p.age = 45;
console.log(p.getfullname());
console.log('p', p);
// p instance için property tanımı yaptık
// p instance için birthDate propertysi yaptık.
Object.defineProperty(p, 'birthDate', {
	writable: true, // setter var
	value: new Date(), // default value
	configurable: true, // getter
});

p.setName('kaan');
p.birthDate = new Date(1990, 10, 10, 10, 10);
console.log('p', p);

// ES6 ile gelen Class özellikleri
// ES6 da olsa JS ınterface yok, generic class yok, abstract class yok, access modifiers yok
// yukarıdaki özellikler TS ile JS kazandırılıyor.
class Human {
	#firstname; // private # ile
	#surname; // field

	constructor(name, surname) {
		this.#firstname = name;
		this.#surname = surname;
	}

	// method
	getFullName() {
		console.log('super-getFullName');
		return `${this.#firstname} ${this.#surname}`;
	}

	// setter
	set Name(name) {
		this.#firstname = name;
	}

	// getter, Name Property tanımı
	get Name() {
		return this.#firstname;
	}
}

const h = new Human('ali', 'can');
console.log('h', h);
h.Name = 'jale';
console.log(h.Name);

// JS ve TS extends keyword ile kalıtım alırız.
// constructorda super ile base class parametreleri geçmemiz lazım.
class Customer extends Human {
	customerNumber;
	constructor(name, surname, customerNumber) {
		super(name, surname);
		this.customerNumber = customerNumber;
	}

	getFullName() {
		// super.getFullName();
		console.log('derived Class getFullName');
		return `${this.name} ${this.surname} - ${this.customerNumber}`;
	}
}

const c = new Customer('ali', 'can', '324234324');
c.getFullName(); // aynı isimde olduklarında virtual tanımlaması yapmasak dahi ovveride etmiş oldu.
