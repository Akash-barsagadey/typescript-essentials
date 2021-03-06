function Logger1(logString: string) {
	console.log('LOGGER FACTORY')
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

function WithTemplate2(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function (constructor: any) {
		console.log('Rendering template')
		const hookEl = document.getElementById(hookId)
		const p = new constructor()
		if (hookEl) {
			hookEl.innerHTML = template
			hookEl.querySelector('h1')!.textContent = p.name
		}
	}
}

@Logger1('LOGGING')
@WithTemplate2('<h1>My Person Object</h1>', 'app')
class Person4 {
	name = 'Akash'

	constructor() {
		console.log('Creating person object...')
	}
}

const pers4 = new Person4()

console.log(pers4)
