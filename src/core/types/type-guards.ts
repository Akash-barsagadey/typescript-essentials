type Admin2 = {
	name: string
	privileges: string[]
}

type Employee2 = {
	name: string
	startDate: Date
}

type UnknownEmployee = Employee2 | Admin2

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name)
	// check tupe guard by using in
	if ('privileges' in emp) {
		console.log('Privileges: ' + emp.privileges)
	}
	if ('startDate' in emp) {
		console.log('Start Date: ' + emp.startDate)
	}
}

printEmployeeInformation({ name: 'Akash', startDate: new Date() })

class Car {
	drive() {
		console.log('Driving...')
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...')
	}

	loadCargo(amount: number) {
		console.log('Loading cargo ...' + amount)
	}
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()
	// check type in class guard by using instanceof by using vanila js code
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(v1)
useVehicle(v2)
