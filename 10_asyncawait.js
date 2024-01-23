// ES-7 ile birlikte async await
// birbirini bekleyen sıralı işlemler varsa
// 1 Promise Chain
// 2 Nested promise
// 3 Async await

const loadData = async () => {
	// data çözümlenene kadar bu kod blogunu alt satıra geçmeden beklet

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const todos = await response.json();
		console.log('todos', todos);

		const userResponse = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const users = await userResponse.json();

		console.log('users', users);
	} catch (error) {
		console.log('error', error);
	}
};

loadData();
