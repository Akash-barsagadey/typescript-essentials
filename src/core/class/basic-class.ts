class Employee {
	empName: string

	constructor(name: string) {
		this.empName = name
	}

	describe() {
		console.log('Department :', this.empName)
	}

	detail(this: Employee) {
		console.log('detail :', this.empName)
	}
}

const ename = new Employee('Akash')

ename.describe() // Department : Akash

const enameCopy = { describe: ename.describe }

enameCopy.describe() // Department : undefined

const enameCopy2 = { empName: 'Barsagadey', detail: ename.describe }

enameCopy2.detail() // Department : Barsagadey
