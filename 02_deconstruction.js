// object deconstructon, array deconstruction

const person = { firstName: 'ali', lastName: 'tan' };

console.log(person.firstName);
console.log(person['lastName']); // indexer yöntemi

const { firstName, lastName } = person;
console.log('name ' + firstName);
console.log('surname ' + lastName);

// function Message(props) {
// 	const { name, text } = props;
// }

const numbers = [1, 2, 3, 4];
console.log(numbers[0]);
// array deconstruction
const [first, second, third, last] = numbers;
// const [name,setName] = useState();

console.log(last);
console.log(first);
