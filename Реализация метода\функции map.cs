function myMap(arr, callback) {
    if(!Array.isArray(arr) || !arr.length || typeof callback !== "function")  {
        return
    } else {
        let newArr = []
        for(let i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i], i, arr))
        }
        return newArr
    }
}

const arr = [1,2,3,4,5]

myMap(arr, (item, index, oldArr) => {
    console.log(oldArr[0] = 333)
    console.log(item)
})
