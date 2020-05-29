function Loggers(logString: string) {
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

@Loggers('LOGGING - PERSON')
class Persons2 {
	name = 'Akash'

	constructor() {
		console.log('Creating person object...')
	}
}

const pers2 = new Persons2()

console.log(pers2)
