// function callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2
	cb(result)
}

//anonymus function
addAndHandle(10, 20, (result) => {
	console.log(result)
	//we can not return result here
})
