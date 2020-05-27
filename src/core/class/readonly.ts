class DepartmentReadOnly {
	private employees: string[] = []

	constructor(private readonly id: string, public name: string) {}

	describe(this: DepartmentReadOnly) {
		console.log(`Department (${this.id}): ${this.name}`)
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}
}

const accountingReadOnly = new DepartmentReadOnly('d1', 'Accounting')

accountingReadOnly.describe()
