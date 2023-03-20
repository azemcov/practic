//Треугольник. Напишите цикл,  выводит такой треугольник:1-7
// function makeTriangle() {
//   for (i=1;i<=7;i++) {
//     console.log('#'.repeat(i))
//   }
// };
// makeTriangle();

//FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
// function FizzBuzz() {
//   for (i=1;i<=100;i++) {
//     if (i%3==0||i%5==0) console.log(i+'FizzBuzz')
//     else console.log (i)
//   }
// }
// FizzBuzz()

//Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
// function chess () {
//   for (i=1;i<=8;i++) {
//     if (i%2==0) console.log(' #'.repeat(8))
//     else console.log('# '.repeat(8))
//   }
// }
// chess();

//Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
// function minimum(a,b) {
//   if (a<b) console.log(a)
//   else if (b<a) {console.log(b)} 
//   else if (a==b) {console.log('числа равны')} 
//   else if (a*0!==0||b*0!==0) {console.log('не число')}
// }
// minimum(1,4354)

//Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
// function isEven(N){
//   if (N==0) {console.log(true)}
//   else if (N==1) {console.log(false)}
//   else if (N>0) {isEven(N-2)}
//   else {console.log('значение отрицатеоьное')}
// }
// isEven(75)

//Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
// let str = 'строка в которой следует проверить количество символов'
// let q = 0;
// function countBs(s){
//     for (i=0;i<str.length;i++) {
//       if (str.charAt(i)==s) {q+=1}
//       else {}
//     }
//   console.log(q)
// }
// countBs('о')

//Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
// let arr=[];
// function range(a,b,c=1){
//   if (a<b&&c>0) {
//     for (i=a;i<=b;i+=c) {arr.push(i);}
//   }
//   else if (a>b&&c<0) {
//     for (i=a;i>=b;i+=c) {arr.push(i);}
//   }
//   console.log(arr)
// }
// function sum(s=0){
//   arr.map(n=>s+=n)
//   console.log(s)
// }
// range(1,10,5);
// sum();

//8 Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log (arr)
// function reverseArray(){
//   let newArr = [];
//   arr.map(n=>newArr.unshift(n))
//   arr=newArr
//   console.log(arr)
// }
// reverseArray()

// function reverseArrayInPlace(a){
//   let nA = [];
//   array1.map(n=>nA.unshift(n))
//   console.log(nA)
// }

//Список.Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п.
//Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную. Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.
//Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
//Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.
// function arrayToList(a){
//   let list=null;
//   for (i=array1.length;i>0;i--) {
//     list={value:array1.at(i-1),rest:list}
//   }
//   console.log(list)
//   return list
// };
// function listToArray(list){
//   let a=[];
//   do {array1.push(list.value);list=list.rest} while (list.rest!==null)
//   array1.push(list.value)
//   console.log(a)
//   return a
// };
// function prepend(list,num) {
//     //получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку
  
// };
// function nth() {
//   //в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента
// };
// let newList = arrayToList([1, 2, 3]);
// let newArray = listToArray(newList);

//10 Глубокое сравнение. Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. Но иногда полезно было бы сравнить объекты по содержимому.Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
// let o1 = {here: {is: "an"}, object: 2};
// let o2 = {here: {is: "an"}, object: 2};
// function deepEqual(a,b) {
//   if (a===b) {return true}
//   else if (typeof(a)!=='object'||typeof(b)!=='object') {Object.is(a,b)}
//   else {
//     let Na=0;
//     let Nb=0;
//     for (p in a) {
//       Na+=1;
//       if (
//         !(p in b) ||
//         !(deepEqual(a[p],b[p]))
//       ) {return false}
//     }
//     for (p in b) {Nb+=1}
//     return Na==Nb;
//   }
// }
// console.log(deepEqual(o1,o2))

//11 Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
// let array = [[1, 2, 3], [4, 5], [6]];
// let n = array.reduce((a,v)=>array1.concat(v),[])
// console.log(n)

//12 Разница в возрасте матерей и их детей
//Используя набор данных из примера, подсчитайте среднюю разницу в возрасте между матерями и их детьми (это возраст матери во время появления ребёнка). Можно использовать функцию average, приведённую в главе.
//братите внимание – не все матери, упомянутые в наборе, присутствуют в нём. Здесь может пригодиться объект byName, который упрощает процедуру поиска объекта человека по имени.
let array1 = [
    {
      name: "Carolus Haverbeke",
      sex: "m",
      born: 1832,
      died: 1905,
      father: "Carel Haverbeke",
      mother: "Maria van Brussel"
    },
    {
      name: "Emma de Milliano",
      sex: "f",
      born: 1876,
      died: 1956,
      father: "Petrus de Milliano",
      mother: "Sophia van Damme"
    },
    {
      name: "Maria de Rycke",
      sex: "f",
      born: 1683,
      died: 1724,
      father: "Frederik de Rycke",
      mother: "Laurentia van Vlaenderen"
    },
    {
      name: "Jan van Brussel",
      sex: "m",
      born: 1714,
      died: 1748,
      father: "Jacobus van Brussel",
      mother: "Joanna van Rooten"
    },
    {
      name: "Philibert Haverbeke",
      sex: "m",
      born: 1907,
      died: 1997,
      father: "Emile Haverbeke",
      mother: "Emma de Milliano"
    },
    {
      name: "Jan Frans van Brussel",
      sex: "m",
      born: 1761,
      died: 1833,
      father: "Jacobus Bernardus van Brussel",
      mother: null
    },
    {
      name: "Pauwels van Haverbeke",
      sex: "m",
      born: 1535,
      died: 1582,
      father: "N. van Haverbeke",
      mother: null
    },
    {
      name: "Clara Aernoudts",
      sex: "f",
      born: 1918,
      died: 2012,
      father: "Henry Aernoudts",
      mother: "Sidonie Coene"
    },
    {
      name: "Emile Haverbeke",
      sex: "m",
      born: 1877,
      died: 1968,
      father: "Carolus Haverbeke",
      mother: "Maria Sturm"
    },
    {
      name: "Lieven de Causmaecker",
      sex: "m",
      born: 1696,
      died: 1724,
      father: "Carel de Causmaecker",
      mother: "Joanna Claes"
    },
    {
      name: "Pieter Haverbeke",
      sex: "m",
      born: 1602,
      died: 1642,
      father: "Lieven van Haverbeke",
      mother: null
    },
    {
      name: "Livina Haverbeke",
      sex: "f",
      born: 1692,
      died: 1743,
      father: "Daniel Haverbeke",
      mother: "Joanna de Pape"
    },
    {
      name: "Pieter Bernard Haverbeke",
      sex: "m",
      born: 1695,
      died: 1762,
      father: "Willem Haverbeke",
      mother: "Petronella Wauters"
    },
    {
      name: "Lieven van Haverbeke",
      sex: "m",
      born: 1570,
      died: 1636,
      father: "Pauwels van Haverbeke",
      mother: "Lievijne Jans"
    },
    {
      name: "Joanna de Causmaecker",
      sex: "f",
      born: 1762,
      died: 1807,
      father: "Bernardus de Causmaecker",
      mother: null
    },
    {
      name: "Willem Haverbeke",
      sex: "m",
      born: 1668,
      died: 1731,
      father: "Lieven Haverbeke",
      mother: "Elisabeth Hercke"
    },
    {
      name: "Pieter Antone Haverbeke",
      sex: "m",
      born: 1753,
      died: 1798,
      father: "Jan Francies Haverbeke",
      mother: "Petronella de Decker"
    },
    {
      name: "Maria van Brussel",
      sex: "f",
      born: 1801,
      died: 1834,
      father: "Jan Frans van Brussel",
      mother: "Joanna de Causmaecker"
    },
    {
      name: "Angela Haverbeke",
      sex: "f",
      born: 1728,
      died: 1734,
      father: "Pieter Bernard Haverbeke",
      mother: "Livina de Vrieze"
    },
    {
      name: "Elisabeth Haverbeke",
      sex: "f",
      born: 1711,
      died: 1754,
      father: "Jan Haverbeke",
      mother: "Maria de Rycke"
    },
    {
      name: "Lievijne Jans",
      sex: "f",
      born: 1542,
      died: 1582,
      father: null,
      mother: null
    },
    {
      name: "Bernardus de Causmaecker",
      sex: "m",
      born: 1721,
      died: 1789,
      father: "Lieven de Causmaecker",
      mother: "Livina Haverbeke"
    },
    {
      name: "Jacoba Lammens",
      sex: "f",
      born: 1699,
      died: 1740,
      father: "Lieven Lammens",
      mother: "Livina de Vrieze"
    },
    {
      name: "Pieter de Decker",
      sex: "m",
      born: 1705,
      died: 1780,
      father: "Joos de Decker",
      mother: "Petronella van de Steene"
    },
    {
      name: "Joanna de Pape",
      sex: "f",
      born: 1654,
      died: 1723,
      father: "Vincent de Pape",
      mother: "Petronella Wauters"
    },
    {
      name: "Daniel Haverbeke",
      sex: "m",
      born: 1652,
      died: 1723,
      father: "Lieven Haverbeke",
      mother: "Elisabeth Hercke"
    },
    {
      name: "Lieven Haverbeke",
      sex: "m",
      born: 1631,
      died: 1676,
      father: "Pieter Haverbeke",
      mother: "Anna van Hecke"
    },
    {
      name: "Martina de Pape",
      sex: "f",
      born: 1666,
      died: 1727,
      father: "Vincent de Pape",
      mother: "Petronella Wauters"
    },
    {
      name: "Jan Francies Haverbeke",
      sex: "m",
      born: 1725,
      died: 1779,
      father: "Pieter Bernard Haverbeke",
      mother: "Livina de Vrieze"
    },
    {
      name: "Maria Haverbeke",
      sex: "m",
      born: 1905,
      died: 1997,
      father: "Emile Haverbeke",
      mother: "Emma de Milliano"
    },
    {
      name: "Petronella de Decker",
      sex: "f",
      born: 1731,
      died: 1781,
      father: "Pieter de Decker",
      mother: "Livina Haverbeke"
    },
    {
      name: "Livina Sierens",
      sex: "f",
      born: 1761,
      died: 1826,
      father: "Jan Sierens",
      mother: "Maria van Waes"
    },
    {
      name: "Laurentia Haverbeke",
      sex: "f",
      born: 1710,
      died: 1786,
      father: "Jan Haverbeke",
      mother: "Maria de Rycke"
    },
    {
      name: "Carel Haverbeke",
      sex: "m",
      born: 1796,
      died: 1837,
      father: "Pieter Antone Haverbeke",
      mother: "Livina Sierens"
    },
    {
      name: "Elisabeth Hercke",
      sex: "f",
      born: 1632,
      died: 1674,
      father: "Willem Hercke",
      mother: "Margriet de Brabander"
    },
    {
      name: "Jan Haverbeke",
      sex: "m",
      born: 1671,
      died: 1731,
      father: "Lieven Haverbeke",
      mother: "Elisabeth Hercke"
    },
    {
      name: "Anna van Hecke",
      sex: "f",
      born: 1607,
      died: 1670,
      father: "Paschasius van Hecke",
      mother: "Martijntken Beelaert"
    },
    {
      name: "Maria Sturm",
      sex: "f",
      born: 1835,
      died: 1917,
      father: "Charles Sturm",
      mother: "Seraphina Spelier"
    },
    {
      name: "Jacobus Bernardus van Brussel",
      sex: "m",
      born: 1736,
      died: 1809,
      father: "Jan van Brussel",
      mother: "Elisabeth Haverbeke"
    }
  ];
  
  