class Department {
	public name: string
	private employees: string[] = []

	constructor(n: string) {
		this.name = n
	}

	describe(this: Department) {
		console.log('Department: ' + this.name)
	}

	addEmployee(employee: string) {
		// validation etc
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const accounting = new Department('Accounting')

accounting.addEmployee('Akash')
accounting.addEmployee('Saurabh')

// accounting.employees[2] = 'Tushar';   // you can't add because of private

accounting.describe()
accounting.name = 'NEW NAME'
accounting.printEmployeeInformation()
