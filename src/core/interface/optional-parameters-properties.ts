interface Named1 {
	readonly name?: string
	outputName?: string // optional parameter not compulsary
}

interface Greetable1 extends Named1 {
	greet(phrase: string): void
}

class Person2 implements Greetable1 {
	name?: string
	age = 30

	constructor(n?: string) {
		if (n) {
			this.name = n
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name)
		} else {
			console.log('Hi!')
		}
	}
}

let user3: Greetable1

user3 = new Person2()

user3.greet('Hi there')
console.log(user3)
