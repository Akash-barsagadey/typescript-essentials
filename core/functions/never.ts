function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code }
	// while (true) {}
}

generateError('An error occurred!', 500)

// Function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message)
}

// Inferred return type is never
function fail() {
	return error('Something failed')
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
	while (true) {}
}
