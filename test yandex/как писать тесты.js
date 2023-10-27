// Код, который вы предоставили, является программой на языке JavaScript, которая считывает строки из стандартного ввода (stdin) 
// и выполняет следующие действия:
// const readline = require('readline');: Эта строка импортирует модуль readline, который предоставляет функциональность для 
// считывания строк из потока ввода.
// const rl = readline.createInterface({ input: process.stdin });: Здесь создается интерфейс readline, который использует стандартный 
// ввод (stdin) как источник данных. rl будет использоваться для считывания строк из stdin.
// let lines = [];: Создается пустой массив lines, который будет использоваться для хранения считанных строк.
// rl.on('line', (line) => { lines.push(line); }): Этот код устанавливает обработчик события line для объекта rl. Каждый раз, когда 
// считывается строка из stdin, эта строка добавляется в массив lines.
// .on('close', () => { ... });: Этот код устанавливает обработчик события close для объекта rl. Событие close будет вызвано, когда 
// поток stdin будет закрыт (например, когда пользователь завершит ввод).
// const [jewels, stones] = lines: Эта строка деструктурирует массив lines и извлекает из него две строки, присваивая их переменным 
// jewels и stones. Предполагается, что первая считанная строка будет содержать символы-драгоценности (jewels), а вторая строка 
// будет содержать камни (stones).
// let result = 0;: Создается переменная result, которая будет использоваться для подсчета количества совпадений между 
// символами-драгоценностями и камнями.
// for (let i = 0; i < stones.length; i++) { ... }: Этот цикл проходит по каждому символу в строке stones.
// if (jewels.includes(stones.charAt(i))) { ++result; }: Внутри цикла проверяется, есть ли текущий символ из строки stones среди 
// символов-драгоценностей (содержатся в строке jewels). Если символ найден, то result увеличивается на 1.
// process.stdout.write(result.toString());: По завершении цикла программа выводит значение result в стандартный вывод (stdout) 
// после преобразования его в строку.
// Эта программа позволяет подсчитать количество символов в строке stones, которые совпадают с символами из строки jewels, и 
// выводит результат.

// const readline = require('readline');
 
// const rl = readline.createInterface({
//     input: process.stdin
// });
 
// let lines = [];
// rl.on('line', (line) => {
//     lines.push(line);
// }).on('close', () => {
//     const [jewels, stones] = lines
//     let result = 0;
//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones.charAt(i))) {
//             ++result;
//         }
//     }
//     process.stdout.write(result.toString());
// });







// const readline = require('readline');
 
// const rl = readline.createInterface({
//     input: process.stdin
// });
 
// let lines = [];
// rl.on('line', (line) => {
//     lines.push(line);
// }).on('close', () => { // по сути только тут начало нашего кода

//     const [jewels, stones] = lines // мы говорим что массив с [jewels, stones] равен линиям
//     // если строк больше двух, то можно изменить логику
//     lines.forEach((line) => {
//         // Ваш код обработки каждой строки здесь
//     });
    
   
//     let result = 0; // новая переменная для посчёта, её мы потом выкидываем как строку....

//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones.charAt(i))) {
//             ++result;
//         }
//     }

//     process.stdout.write(result.toString()); // ...тут ТУТ РЕЗУЛЬТАТ!!!
// }//а тут конец кода

// );


