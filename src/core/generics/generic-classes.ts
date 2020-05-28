class DataStorage<T extends string | number | boolean> {
	private data: T[] = []

	addItem(item: T) {
		this.data.push(item)
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return
		}
		this.data.splice(this.data.indexOf(item), 1) // -1
	}

	getItems() {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Akash')
textStorage.addItem('Saurabh')
textStorage.removeItem('Akash')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>();
// const akashObj = {name: 'Akash'};
// objStorage.addItem(akashObj);
// objStorage.addItem({name: 'Saurabh'});
// // ...
// objStorage.removeItem(akashObj);
// console.log(objStorage.getItems());
