const array = [222]

function arrayIsEmpty(arr) {
    if(!arr.length) {
        return true
    } else {
        return false
    }
} 

console.log(arrayIsEmpty(array))

// Упращення версия.
const array = [12]

function arrayIsEmpty(arr) {
    return arr.length === 0;
} 

console.log(arrayIsEmpty(array))
