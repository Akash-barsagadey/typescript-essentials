function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId)
		const p = new constructor()
		if (hookEl) {
			hookEl.innerHTML = template
			hookEl.querySelector('h1')!.textContent = p.name
		}
	}
}

@WithTemplate('<h1>My Person Object </h1>', 'app')
class Persons3 {
	name = 'Akash'

	constructor() {
		console.log('Creating person object...')
	}
}

const pers3 = new Persons3()

console.log(pers3)
