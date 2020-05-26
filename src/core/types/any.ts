let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean

notSure.ifItExists() // okay, ifItExists might exist at runtime
notSure.toFixed() // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//Property 'toFixed' does not exist on type 'Object'.

let list2: any[] = [1, true, 'free']

list2[1] = 100
