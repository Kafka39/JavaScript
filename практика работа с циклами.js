const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const namesArray = [
    ["Андрей", "Артем", "Алина"],
    ["Борис", "Борислав", "Бронислав"]
];

let operationCompleted = false;

rl.question("Операции с массивом:\n1 - работа с массивом\n2 - завершить операцию\n\nВыберите опцию: \n", option => {
    switch (+option) {
        case 1:
            for (let rowIndex = 0; rowIndex < namesArray.length; rowIndex++) {
                console.log(`Строка: ${rowIndex + 1}: `);
                if (rowIndex === namesArray.length - 1) console.log(`Столбцов: ${namesArray[0].length}`);
                console.log(`Значение: ${namesArray[rowIndex]}`);

                operationCompleted = true;
            }
            if (operationCompleted) {
                console.log(`Всего строк в массиве: ${namesArray.length}`);
            }
            rl.question("\nВыберите строку массива:\n1 - первая строка\n2 - вторая строка\nВыберите действие: \n", rowSelection => {
                for (let columnIndex = 0; columnIndex < namesArray[rowSelection - 1].length; columnIndex++) {
                    console.log(`Индекс: ${columnIndex + 1} - ${namesArray[rowSelection - 1][columnIndex]}`);
                }

                const selectedRow = namesArray[rowSelection - 1];

                rl.question("\nИндекс который хотите изменить: \n", index => {
                    rl.question("\nВыберите действие с индексом:\n1 - удалить\n2 - добавить\nВыберите действие: \n", action => {
                        switch (+action) {
                            case 1: {
                                console.log(`Значение ${selectedRow.splice(index - 1, 1)} успешно удалено из строки массива.`);
                                console.log(`Остаток в строке ${selectedRow}, значение: ${namesArray[rowSelection - 1]}`);
                                break;
                            }
                            case 2:
                                console.log("Действие 2");
                                // Потом
                                break;
                        }
                    });
                });
            });

            break;
        case 2:
            process.exit();
    }
});
