const arr = new Array()

for(i = 0; i < 10; i++) {
    let bool = false
    let value = (Math.random() * 50).toFixed()

    for(j = 0; j < i; j++) {
        if(arr[j] === value) {
            bool = true
            break
        }
    }

    if(!bool) {
        arr[i] = value
        bool = false
    }
}

const value = arr[0]
for(i = 0; i < 10; i++) {
    if(arr[0] < value) {
        value = arr[i]
    }
}
console.log('Min value: ' + value)
