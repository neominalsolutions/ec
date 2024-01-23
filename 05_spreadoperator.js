// ES6 ile çıktı.
// object ve array tipi için kullanılır.

// 1. amaç referans koparma işlemi
// 2. amaç obje yada dizilere eleman ekleme işlemleri
// ...

const person = { name: 'ali', surname: 'can' };
const person2 = person; // referans hatasına yol açtı
const employee = { ...person, age: 27 };
const employee2 = { age: 27, ...person, hairColor: 'black' }; // age ilk property
employee2.name = 'yunus';
person2.surname = 'hakan';
console.log(employee);
console.log(employee2);
console.log(person);

// dizilerde spread operatoru
// value type dan oluşlan bir dizi ise spread operator dizinin referansını günceller.
const names = ['ali', 'ahmet', 'can'];
const names2 = [...names]; // names2 ref names den farklı , slice muadil yeni bir yaklaşım.
names2.push('jale');

console.log('names ' + names);
console.log('names2 ' + names2);

// Object Array
const employees = [
	{ name: 'ali', socialNumber: 13245 },
	{ name: 'halil', socialNumber: 234324 },
];

// const employees2 = [...employees];  hala obje referansları güncellenemedi (Invalid)
// const employees2 = employees.slice(); hala obje referansları güncellenemedi (Invalid)

const employees2 = employees.map((item) => {
	// return { ...item }; // 1.yöntem kullanımı
	return { name: item.name, socialNumber: item.socialNumber };
});

employees2[0].name = 'kaan';

console.log('employees ', employees);
console.log('employees3 ', employees2);

// spread operatoru kullanmadan obje referanslarını güncellemek için ES5 içinde object assign operatoru var

const car = { engine: 'v8', fuel: 'gas' };
const sportCar = {};
Object.assign(sportCar, car); // buda object assign ile referans değeri kopardık.
sportCar.fuel = 'electric';

console.log('sportCar', sportCar);
console.log('car', car);
