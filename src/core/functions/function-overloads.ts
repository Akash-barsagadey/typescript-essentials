type Combine = string | number
type Numerics = number | boolean

type Universl = Combine & Numerics

function addfunctn(a: number, b: number): number
function addfunctn(a: string, b: string): string
function addfunctn(a: string, b: number): string
function addfunctn(a: number, b: string): string
function addfunctn(a: Combine, b: Combine) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}
	return a + b
}

const resul = addfunctn('Akash', ' Barsagadey')
resul.split(' ')
