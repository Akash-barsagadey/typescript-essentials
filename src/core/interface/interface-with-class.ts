interface Hobby {
	name: string

	greet(phrase: string): void
}

class Person implements Hobby {
	name: string
	age = 27

	constructor(n: string) {
		this.name = n
	}

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	}
}

let user1: Hobby

user1 = new Person('Akash')

user1.greet('Sports')
console.log(user1)
