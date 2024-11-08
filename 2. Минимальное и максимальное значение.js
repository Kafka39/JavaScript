const arr = [132,122,33,41,522];

let value = arr[0]
for(i = 0; i < 10; i++) {
    for(j = 0; j < i; j++) {
        if(arr[j] < value) {
            value = arr[j]
        }
    }
}

console.log(value)
