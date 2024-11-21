const arsr = [3,6,9]

function reduce(arr, callback, initialValue = 0) {
    if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return
    } else {
        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) { 
            accumulator = callback(accumulator, arr[i], i, arr)
        }
        return accumulator
    }

}
let TEST = reduce(arsr, (acc, value, i, arr) => {
    console.log(`ACC: ${acc}, VALUE: ${value}, I: ${i}, ARR: ${arr}`)
    return acc + value
})

console.log(TEST)
