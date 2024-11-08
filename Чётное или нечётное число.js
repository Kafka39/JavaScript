let value = +(Math.random() * 100).toFixed()

if(value % 2) {
    console.log('Число не чётное: ', value, value % 2)
} else {
    console.log('Число чётное: ', value, value % 2)
}
