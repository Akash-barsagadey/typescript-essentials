function WithTemplate3(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super()
				console.log('Rendering template')
				const hookEl = document.getElementById(hookId)
				if (hookEl) {
					hookEl.innerHTML = template
					hookEl.querySelector('h1')!.textContent = this.name
				}
			}
		}
	}
}

@WithTemplate3('<h1>My Person Object</h1>', 'app')
class Person5 {
	name = 'Max'

	constructor() {
		console.log('Creating person object...')
	}
}

const pers5 = new Person5()

console.log(pers5)
