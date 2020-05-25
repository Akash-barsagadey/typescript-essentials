function addNumber(n1: number, n2: number): number {
	return n1 + n2
}

// void doesn't return anything : undefined
function printResult1(num: number): void {
	console.log('Result: ' + num)
}

printResult1(addNumber(5, 12))

// let someValue: undefined;
