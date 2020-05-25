const product = {
	id: 'abc1',
	price: 100.2,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Bike',
		description: 'A new bike - almost brand-new!',
	},
}

// This would be the type of such an object:

/* {
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
} */

declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK

//create(42); // Error
//Argument of type '42' is not assignable to parameter of type 'object | null'.

//create('string') // Error
//Argument of type '"string"' is not assignable to parameter of type 'object | null'.
