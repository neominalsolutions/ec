// c# daki kolleksiyon yapılarına benzer.
// js de dizilerin kapasitelerini sabit olarak belirlemeye gerek yok. kendi kendine dizinin capacity güncelleyebilir.

const arr = ['ali', 3, 5, true, { city: 'istanbul' }, [0, 4, 5]];
// console.log(arr);

// arr = [5, 6, 7];

const arr2 = arr; // arr2 arr1 kopyası oldu, referans kopyası
arr2.push({ country: 'Turkey' });

console.log('arr', arr);
console.log('arr2', arr2);

// arr referansının bağını nasıl koparırız
// Typescript de de array referans hata sıkıntısı devam eder.
// 1. teknik
const arr3 = arr.slice(); // referansı koparıp kopyalama yaptık
arr3.push('gemi');

console.log('arr', arr);
console.log('arr3', arr3);

// 2. teknik map operatoru // referansı koparıp kopyalama yaptık
// obje dizileri ile çalışırsak slice yerine map kullanalım.
const arr4 = arr.map((item, index) => {
	console.log('index' + index);

	if (typeof item === 'number') {
		item *= 2;
	}

	return item;
});

arr4.push('halat');

console.log('arr', arr);
console.log('arr4', arr4);

// ES6 ile birlikte gelen özel array functionlar

arr4.forEach((item) => {
	console.log('item ' + item);
});

// C# Lamda Expression yöntemi
const value = arr4.find((x) => x == 6); // bulursa değer bulamazsa undefined
console.log('value ' + value);
// dizinin içerisindeki numeric değerleri bul
const filtredvalues = arr4.filter((x) => typeof x === 'number');
console.log('filtredvalues', filtredvalues);

// C# any yerine som kullanıyoruz, herhangi bir değer var mı
const names = ['halil', 'hande', 'cansu'];
// C# contains yerine js includes kullanırız.
const isExists = names.some((x) => x.includes('ali'));
console.log('isExists', isExists);
// every hepsinin eşleşiğ eşleşmediğine bakarız.
console.log('tüm değerler eşleşiyor mu ' + names.every((x) => x.includes('l')));

const names2 = names.concat(['jale', 'kaan']);
console.log(names2);

// diziye eleman ekleme çıkarma işlemleri
names.push('tansu'); // sona eklenir
console.log('names' + names);
names.unshift('caner');
console.log('names : ' + names); // prepend başa ekleme
// names.pop(); // son elemanı çıkartır.
console.log('pop :' + names.pop());
console.log('shift :' + names.shift());
names.reverse(); // ters çevirme // string ifadeler
console.log('A-Z : ' + names.sort((a, b) => a.localeCompare(b)));
console.log('Z-A : ' + names.sort((a, b) => b.localeCompare(a)));

const numbers2 = [10, 4, 7, 9]; // numeric ifadeler
console.log('A-Z : ' + numbers2.sort((a, b) => a - b));
console.log('Z-A : ' + numbers2.sort((a, b) => b - a));

// diziden eleman silme
const result = numbers2.splice(2, 1); // 2.indeksten 1 adet sil
console.log('silme ' + result); // silinen değeri result olarak döndürür.
console.log('numbers2 ' + numbers2);
