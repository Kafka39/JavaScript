function myMap(arr, callback) {
    if(!Array.isArray(arr) || !arr.length || typeof callback !== "function")  {
        return
    } else {
        let newArr = []
        for(let i = 0; i < arr.length; i++) {
            newArr.push(callback({item: arr[i], index: i, array: arr}))
        }
        return newArr
    }
}

const arr = [1,2,3,4,5]

console.log(myMap(arr, ({item}) => item * 3))
