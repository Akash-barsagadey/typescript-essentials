type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combineCustom(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
	let result
	if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
		result = +input1 + +input2
	} else {
		result = input1.toString() + input2.toString()
	}
	return result
}

const combinedCustomAges = combineCustom(30, 26, 'as-number')
console.log(combinedCustomAges)

const combinedCustomNames = combineCustom('Akash', 'Barsagadey', 'as-text')
console.log(combinedCustomNames)

type User = { name: string; age: number }
const u1: User = { name: 'Akash', age: 27 } // this works!

/* Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. */

// This allows you to avoid unnecessary repetition and manage types centrally.

function greet(user: { name: string; age: number }) {
	console.log('Hi, I am ' + user.name)
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
	return checkAge > user.age
}

// you can simplify upeer  code to :

function greetaliases(user: User) {
	console.log('Hi, I am ' + user.name)
}

function isOlderaliases(user: User, checkAge: number) {
	return checkAge > user.age
}
