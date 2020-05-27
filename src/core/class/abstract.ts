abstract class DepartmentAbstract {
	static fiscalYear = 2020

	protected employees: string[] = []

	constructor(protected readonly id: string, public name: string) {}

	static createEmployee(name: string) {
		return { name: name }
	}

	// declare abstract to force create method
	abstract describe(this: Department): void
}

class ITDepartment2 extends DepartmentAbstract {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
		this.admins = admins
	}

	describe() {
		console.log('IT Department - ID: ' + this.id)
	}
}

const employee1 = DepartmentAbstract.createEmployee('Barsagadeyx')
console.log(employee1, DepartmentAbstract.fiscalYear)

const iTDepa = new ITDepartment2('d1', ['Akash'])

iTDepa.describe()

console.log(iTDepa)
