const emp = {
	name: 'Akash',
	age: 27,
	hobbies: ['Sports', 'Travelling'],
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(emp.name)

for (const hobby of emp.hobbies) {
	console.log(hobby.toUpperCase())
	// console.log(hobby.map()); // !!! ERROR !!!
}
