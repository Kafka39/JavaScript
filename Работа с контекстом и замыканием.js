const person1 = {name: 'Alex', age: 30,}
const person2 = {name: 'Rob', age: 31}

let arr = []

function funcContext(context) {
    return function(...args) {
        context.push(...args)
    }
}

let func = funcContext(arr)

func(person1, person2)

console.log(arr)
