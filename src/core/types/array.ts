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

let list: number[] = [1, 2, 3]

let list1: Array<number> = [1, 2, 3]
