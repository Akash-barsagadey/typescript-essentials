//by setting some constraints
function merge2<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

const mergedObj2 = merge({ name: 'Akash', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj2)

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return 'Value: ' + obj[key]
}

extractAndConvert({ name: 'Akash' }, 'name')
