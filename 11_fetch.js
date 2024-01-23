const loadData = async () => {
	const data = { users: [], todos: [] };

	const loadtodos = async () => {
		return fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				console.log('todos', response);
				return response.json(); // json parser
			})
			.then((jsonResponse) => {
				// json formatına dönüşmüş olan data
				console.log('todosJson', jsonResponse);
				data.todos = [...jsonResponse];
				return Promise.resolve(data);
				// return Promise.reject('todos-hata');
			});
	};

	const loadusers = async () => {
		return fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json(); // json parser
			})
			.then((jsonResponse) => {
				// console.log('users', jsonResponse);
				data.users = [...jsonResponse];
				return Promise.resolve(data);
				// return Promise.reject('users-hata');
			});
	};

	return loadusers().then(loadtodos);
};

loadData()
	.then((response) => {
		console.log('aggregate-response', response);
	})
	.catch((err) => {
		console.log('err', err);
	});

// fetch default get çalışır
fetch('https://jsonplaceholder.typicode.com/todos')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log('todos', data);
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log('users', data);
				// api call
			})
			.catch((err) => {
				console.log('users-error', err);
			});
	})
	.catch((err) => {
		console.log('todos-err', err);
	});
