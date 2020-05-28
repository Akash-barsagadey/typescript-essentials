type Admin = {
	name: string
	privileges: string[]
}

type Employe = {
	name: string
	startDate: Date
}

// interface ElevatedEmployee extends Employe, Admin {}

type ElevatedEmployee = Admin & Employe

const e1: ElevatedEmployee = {
	name: 'Akash',
	privileges: ['create-server'],
	startDate: new Date(),
}

type Combinabl = string | number
type Numeric = number | boolean

type Universal = Combinabl & Numeric
