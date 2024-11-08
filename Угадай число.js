const readline = require('readline').createInterface({input: process.stdin, output: process.stdout})


let value = +(Math.random() * 20 + 1).toFixed()
readline.question('Введите число: ', number => {
    if(value === +number) {
        console.log(`Вы угадали! Вы ввели ${number}, я загадал: ${value}`)
    } else {
        console.log(`Вы не угадали! Вы ввели ${number}, я загадал: ${value}`)
    }

    console.log(typeof(+number))
    readline.close()
})

// Компьютер загадывает случайное число от 1 до 10.
// Тебе нужно написать код, который будет проверять твой "угадываемый" номер с загаданным числом и выводить сообщение "Правильно!" или "Попробуй еще раз".
// Для теста можно задать угадываемое число, а потом попробовать рандомизировать.
