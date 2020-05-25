let userInput1: unknown
let userName: string

userInput1 = 5
userInput1 = 'Akash'

//extra type check required in unknown
if (typeof userInput1 === 'string') {
	userName = userInput1
}
