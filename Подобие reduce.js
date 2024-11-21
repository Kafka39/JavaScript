const arsr = [3,6,9]

function reduce(arr, callback) {
    if(!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return
    } else {
        let accumulator = 0;
        let currentValue;
        let currentIndex;
        let array;

        for (let i = 0; i < arr.length; i++) { 
            accumulator += arr[i]
            currentValue = arr[i];
            currentIndex = i;
            array = arr;
        }
        return callback(accumulator, currentValue, currentIndex, array)
    }

}
let TEST = reduce(arsr, (acc, value, index, arr) => {
    console.log(acc,value, index, arr)
})
