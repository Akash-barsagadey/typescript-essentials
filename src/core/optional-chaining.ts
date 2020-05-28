const fetchedUserData = {
	id: 'u1',
	name: 'Akash',
	job: { title: 'CEO', description: 'My own company' },
}

console.log(fetchedUserData?.job?.title)

// Nullish Coalescing

const userInput2 = undefined

const storedData = userInput2 ?? 'DEFAULT'

console.log(storedData)
