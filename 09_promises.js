// Promise declaration block

// axios ve fetch apida yapılmış
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		// timing
		// resolve(56);
		reject('hata');
	}, 2000);
});

// Promise call
// clienside uygulamalarda api istek atıp, then,catch bloklarını çağırıyoruz.
p1.then((data) => {
	// resolve
	console.log('data', data);
	// binding işlemleri gerçekleşiyor.
	console.log('a * b * async = ' + a * b * data);
})
	.catch((err) => {
		// rejected
		console.log('err', err);
	})
	.finally(() => {
		// hata olsun olmasın çalışan kod bloğu
		alert('işlem bitti');
	});
const b = 20;
const a = 15;
console.log('a x b = ' + a * b);

