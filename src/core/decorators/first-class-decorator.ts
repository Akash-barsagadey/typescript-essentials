function Logger(constructor: Function) {
	console.log('Logging...')
	console.log(constructor)
}

@Logger // when class is define before use
class Persons {
	name = 'Akash'

	constructor() {
		console.log('Creating person object...')
	}
}

const pers = new Persons()

console.log(pers)
