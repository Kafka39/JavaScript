
// Реализация: Функция НЕ возвращает результат в место вызова
const arr = [5,10,15,20]

function newFor(arr) {
    if(!Array.isArray(arr) || !arr.length) {
        throw new Error("Ошибка аргумента! Нужен массив!")
    } 

    let index = 0
    return {
        of(callback) {
            if(typeof callback !== 'function') {
                throw new Error("Ошибка аргумента! Нужна функция!")
            }

            while(index < arr.length){
                callback(arr[index])
                index++
            }
        }
    }
}

newFor(arr).of(item => console.log(item))

// Реализация: Функция возвращает результат в место вызова
const arr = [5,10,15,20]

function newFor(arr, callback) {
    if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        throw new Error("Ошибка аргумента!")
    } 

    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}

let result = newFor(arr, e => e )

console.log(result)
