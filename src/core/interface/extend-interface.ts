interface Named {
	readonly name: string
}

interface Greetable extends Named {
	greet(phrase: string): void
}

class Person1 implements Greetable {
	name: string
	age = 27

	constructor(n: string) {
		this.name = n
	}

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	}
}

let user2: Greetable

user2 = new Person1('Akash')
// user1.name = 'Barsagadey'; // because of readonly we can set only once

user2.greet('Hi there - I am')
console.log(user2)
