interface Person {
	name: string
	age: number

	greet(phrase: string): void
}

let userP: Person

userP = {
	name: 'Akash',
	age: 27,
	greet(phrase: string) {
		console.log(phrase)
	},
}

userP.greet('Hi')
