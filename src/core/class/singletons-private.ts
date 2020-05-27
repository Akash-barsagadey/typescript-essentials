class DepartmentSingltons {
	static fiscalYear = 2020

	protected employees: string[] = []

	constructor(protected readonly id: string, public name: string) {}

	static createEmployee(name: string) {
		return { name: name }
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

class AccountingDepartmentSingltons extends DepartmentSingltons {
	private lastReport: string
	private static instance: AccountingDepartmentSingltons

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	static getInstance() {
		if (AccountingDepartmentSingltons.instance) {
			return this.instance
		}
		this.instance = new AccountingDepartmentSingltons('d2', [])
		return this.instance
	}
}

const accounting3 = AccountingDepartmentSingltons.getInstance()
const accounting4 = AccountingDepartmentSingltons.getInstance() // not able to create second Instance

console.log(accounting3, accounting4)
