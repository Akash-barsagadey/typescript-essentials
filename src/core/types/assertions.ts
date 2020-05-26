//assertion is like a type cast

//Type assertions have two forms.

// One is the “angle-bracket” syntax
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length

// And the other is the as-syntax:

let someValue1: any = 'this is a string'

let strLength1: number = (someValue as string).length
