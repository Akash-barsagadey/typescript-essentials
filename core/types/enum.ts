// const ADMIN = 0;
// const TESTER = 1;
// const DEVELOPER = 2;

enum Role {
	ADMIN = 'ADMIN',
	TESTER = 100,
	DEVELOPER = 'DEVELOPER',
}

const person = {
	name: 'Akash',
	age: 30,
	hobbies: ['Sports', 'Travelling'],
	role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
	console.log('is ADMIN')
}
