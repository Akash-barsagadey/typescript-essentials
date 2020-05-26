// Declare a tuple type
let x: [string, number]

// Initialize it
x = ['hello', 10] // OK

// Initialize it incorrectly
//x = [10, 'hello'] // Error

/* 
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.
 */

const user: {
	name: string
	age: number
	hobbies: string[]
	role: [number, string]
} = {
	name: 'Akash',
	age: 27,
	hobbies: ['Sports', 'Travelling'],
	role: [2, 'developer'],
}

// user.role.push('admin');
// user.role[1] = 10; // !!! ERROR !!!

// user.role = [0, 'admin', 'tester']; // !!! ERROR !!!
