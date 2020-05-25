function addNumber1(n1: number, n2: number): number {
	return n1 + n2
}
// define function types
let combineValues: (a: number, b: number) => number

combineValues = addNumber1
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))
