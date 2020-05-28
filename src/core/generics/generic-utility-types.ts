//Partial<T>
interface Todo {
	title: string
	description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
	title: 'organize desk',
	description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
	description: 'throw out trash',
})

//Readonly<T>
const names2: Readonly<string[]> = ['Akash', 'Saurabh']
// names2.push('Barsagadey');
// names2.pop();
