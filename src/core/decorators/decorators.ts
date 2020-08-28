@classDecorator
class Boat {
  @testDecorator
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops boat was sunk in ocean')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      //throw new Error()
      console.log('swish')
    } else {
      console.log('nothing')
    }
  }
}

function testDecorator(target: any, key: string): void {
  console.log(target)
  console.log(key)
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index)
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor)
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value

    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot('fast')
