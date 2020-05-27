class DepartmentInheritans {
	protected employees: string[] = []

	constructor(private readonly id: string, public name: string) {}

	describe(this: DepartmentInheritans) {
		console.log(`Department (${this.id}): ${this.name}`)
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

class ITDepartment extends DepartmentInheritans {
	admins: string[]
	constructor(id: string, admins: string[]) {
		super(id, 'IT')
		this.admins = admins
	}
}

class AccountingDepartment extends DepartmentInheritans {
	private lastReport: string

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport
		}
		throw new Error('No report found.')
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!')
		}
		this.addReport(value)
	}
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	addEmployee(name: string) {
		if (name === 'Akash') {
			return
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

const it = new ITDepartment('d1', ['Akash'])

it.describe()
it.printEmployeeInformation()

console.log(it)

const accountingDep = new AccountingDepartment('d2', [])

accountingDep.mostRecentReport = 'Year End Report'

accountingDep.addReport('Something went wrong...')

console.log(accountingDep.mostRecentReport)

accountingDep.printReports()
