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

// 12 Разница в возрасте матерей и их детей
// Используя набор данных из примера, подсчитайте среднюю разницу в возрасте между матерями и их детьми (это возраст матери во время появления ребёнка). Можно использовать функцию average, приведённую в главе.
// братите внимание – не все матери, упомянутые в наборе, присутствуют в нём. Здесь может пригодиться объект byName, который упрощает процедуру поиска объекта человека по имени.
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
      mother: "Petrrightlla Wauters"
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
      name: "Pieter Antright Haverbeke",
      sex: "m",
      born: 1753,
      died: 1798,
      father: "Jan Francies Haverbeke",
      mother: "Petrrightlla de Decker"
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
      mother: "Petrrightlla van de Steene"
    },
    {
      name: "Joanna de Pape",
      sex: "f",
      born: 1654,
      died: 1723,
      father: "Vincent de Pape",
      mother: "Petrrightlla Wauters"
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
      mother: "Petrrightlla Wauters"
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
      name: "Petrrightlla de Decker",
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
      father: "Pieter Antright Haverbeke",
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

// let allNames = array1.map(n=>n.name)
// let pwmil = array1.map(n=>{if(typeof(allNames.find(f=>f==n.mother))!=='undefined'){return n.name}}).filter(n=>typeof(n)!=='undefined')
// let yy=[];
// for(i=pwmil.length;i>0;i--){
//   yy.push(array1.find(n=>n.name==pwmil[i-1]).born-
//   array1.find(f=>f.name==array1.find(n=>n.name==pwmil[i-1]).mother).born)
// }
// yy=yy.reduce((a,n)=>a+n)/pwmil.length
// console.log(yy)

// let data = [
//   {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
//   {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
//   {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
//   {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
//   {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//   {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
//   {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
//   {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petrrightlla Wauters"},
//   {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
//   {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
//   {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Pieter Antright Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petrrightlla de Decker"},
//   {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
//   {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
//   {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
//   {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
//   {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petrrightlla van de Steene"},
//   {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petrrightlla Wauters"},
//   {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
//   {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petrrightlla Wauters"},
//   {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Petrrightlla de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
//   {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
//   {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antright Haverbeke", "mother": "Livina Sierens"},
//   {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
//   {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
//   {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
//   {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
// ]
// function round10(v){return Math.round((v)*10)/10}
// let c16=[];
// let c17=[];
// let c18=[];
// let c19=[];
// let c20=[];
// let c21=[];
// for(i=data.length;i>0;i--){
//   if(Math.ceil(data[i-1].died/100)==16){c16.push(data[i-1].died-data[i-1].born)}
//   if(Math.ceil(data[i-1].died/100)==17){c17.push(data[i-1].died-data[i-1].born)}
//   if(Math.ceil(data[i-1].died/100)==18){c18.push(data[i-1].died-data[i-1].born)}
//   if(Math.ceil(data[i-1].died/100)==19){c19.push(data[i-1].died-data[i-1].born)}
//   if(Math.ceil(data[i-1].died/100)==20){c20.push(data[i-1].died-data[i-1].born)}
//   if(Math.ceil(data[i-1].died/100)==21){c21.push(data[i-1].died-data[i-1].born)}
// }
// // Метод Math.floor() - округление вниз.
// // Метод Math.round() возвращает число, округлённое к ближайшему целому.
// // Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
// c16=round10(c16.reduce((a,v)=>a+v)/c16.length)
// c17=round10(c17.reduce((a,v)=>a+v)/c17.length)
// c18=round10(c18.reduce((a,v)=>a+v)/c18.length)
// c19=round10(c19.reduce((a,v)=>a+v)/c19.length)
// c20=round10(c20.reduce((a,v)=>a+v)/c20.length)
// c21=round10(c21.reduce((a,v)=>a+v)/c21.length)
// console.log(c16)
// console.log(c17)
// console.log(c18)
// console.log(c19)
// console.log(c20)
// console.log(c21)

// ПРОМИСЫ
// function r1(n){
//   return (Math.round(n*100))/100
// }
// let a = performance.now()
// async function getData(u){
//   try {
//     let res = await fetch(u)
//     let data = await res.json()
//     let b = performance.now()
//     data.forEach(n=>n.name = n.name.toUpperCase())
//     console.log(data)
//     console.log(`this code has been executed in ${r1((b-a)/1000)} seconds`)
//   } catch(err) {
//     console.error(err)
//   }
// }
// getData('https://jsonplaceholder.typicode.com/users')


// let a={
//   name:'alex',
//   age:10,
// }
// let b = Object.assign({},a)
// b.name = 'bob'
// console.log(a.name)
// console.log(b.name)


// let url='https://jsonplaceholder.typicode.com/users'
// async function showUsers(n){
//   try {
//     let res = await fetch(n)
//     let data = await res.json()
//     let data2=data.map(n=>({...n, name:n.name.toUpperCase()}))
//     console.log(data)
//     console.log(data2)
//   } catch(err){
//     console.log(err)
//   }
// }
// showUsers(url)

//самовызываемая функция
// let a= (function(a,b){return a+b}(2,4))
// console.log(a)

//Перепишите функцию clright таким образом, чтобы она была способна клонировать переданный как параметр объект.

// function r1(n){
//   return (Math.round(n*100))/100
// }

// (async function getData(url){
//   let a = performance.now()
//   let res = await fetch(url)
//   let data = await res.json()
//   let b = performance.now()
//   let data2 = data.map(n=>({...n,name:n.name.toUpperCase()}))
//   console.log(data)
//   console.log(data2)
//   console.log(r1((b-a)/1000))
// }('https://jsonplaceholder.typicode.com/users'))


// function f(n){
//     return array1.find(i=>i.name===n)
// } 
// let allPersons = array1.map(i=>i.name).filter(i=>f(f(i).mother))
// let meanAge = allPersons.map(i=>f(i).born-f(f(i).mother).born).reduce((a,b)=>a+b)/allPersons.length
// console.log(meanAge)

// let allNames = array1.map(n=>n.name)
// let pwmil = array1.map(n=>{if(typeof(allNames.find(f=>f==n.mother))!=='undefined'){return n.name}}).filter(n=>typeof(n)!=='undefined')
// let yy=[];
// for(i=pwmil.length;i>0;i--){
//   yy.push(array1.find(n=>n.name==pwmil[i-1]).born-
//   array1.find(f=>f.name==array1.find(n=>n.name==pwmil[i-1]).mother).born)
// }
// yy=yy.reduce((a,n)=>a+n)/pwmil.length
// console.log(yy)


// //1
// function f1(n){
//   console.log(n)
// };
// f1(10);

// //2
// let f2 = function(n){
//   console.log(n)
// };
// f2(20);

// //3
// let f3 = (n)=>{
//   console.log(n)
// };
// f3(30);

// //4
// (function f4(n){
//   console.log(n)
// }(40));

// //5
// async function f5(n){
//   try{
//     let res = await fetch(n)
//     let data = await res.json()
//     console.log(data[4].id*10)
//   } catch(err){
//     console.error(err)
//   }
// }
// f5('https://jsonplaceholder.typicode.com/users')

// // //6 
// // function* f6(){

// // }

// //7
// let f7 = new Function('a','b','console.log(a+b)')
// f7(1,69)

// const person = {
//   name: 'John',
//   sayHi: () => {
//     console.log(`Hi, my name is ${this.name}`);
//   }
// };

// person.sayHi(); // Hi, my name is undefined

// const sayHi = person.sayHi;
// sayHi(); // Hi, my name is undefined



// ТАК МОЖНО НЕЯВНО ВОЗВРАЩАТЬ БОЛЬШЕ ОДНОГО ВЫРАЖЕНИЯ
// const sayHi = (name) => (name = 'Hi, ' + name,name=name+'!')
// console.log(sayHi('Sam'))



// THIS THIS THIS стрельчная функция так может украсть this
// THIS THIS THIS
// let obj={ a(){ (()=>console.log(this))() } }
// obj.a()




// let x='AAABBBBC'
// //A3BC2
// function myFn(i){
//   let count=1
//   let memory=''
//   for(n=0;n<i.length;n++){
//     i.charAt(n)==i.charAt(n+1)?count+=1:(memory+=(i.charAt(n)+count),count=1)
//   }
//   return memory
// }
// console.log(myFn(x))

// class Aa{
//   constructor(a,b){
//     this.a=a
//     this.b=b
//   }
//   myM(){console.log(this.a+this.b)}
// }
// let objA=new Aa('Hello',' World')
// objA.myM();


// 2-я задача
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin
// });
// let lines = [];
// rl.on('line', (line) => {
//     lines.push(line);
// }).on('close', () => {
  
//   lines.shift()
//   let n=0;let l=0;
//   function checkN(){if(n>l){l=n}else{}}
//   lines.forEach((x)=>{
//     if(x==0){n=0}
//     else if(x==1){n++;checkN()}
//     else {}
//   })
//     process.stdout.write(l.toString());
// });

//рещено бинарным способом (но так не надо :) 
// let lines = [5,1,0,-34,34,34,2,22,23,-5,6,1,-1,0,0,0,3];
// let array=[];
// let firstDright=false;

// function biSearch(s,e,t){
//   let middle=Math.floor((s+e)/2);
  
//   if(t<array[middle]){                    //ищем в левой половине
//     if(e===s){array.splice(middle,0,t)}
//     else if(e>s){biSearch(s,middle,t)}
//     else{}
//   }                                       //ищем в левой половине

//   else if(t>array[middle]){               //ищем в правой половине
//     if(e===s){array.splice(middle+1,0,t)}
//     else if(e>s){biSearch(middle+1,e,t)}
//     else{}
//   }                                       //ищем в правой половине
//   else{}
// }

// lines.forEach((line)=>{
//   if(firstDright===false){firstDright=true}
//   else if(firstDright===true&&array.length==0){array.push(line)}
//   else {biSearch(0,array.length-1,line)}
// });

// console.log(array);


// 3-я задача
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
// });

// rl.once('line', (x) => {
//   let currentNumber;
//   let array=[];
//   rl.on('line', (line) => {
//     if(currentNumber!==line){array.push(currentNumber=line)}
//     if(array.length > 10000){array.forEach((i)=>{process.stdout.write(`${i}\n`)});array=[]}
//   }).on('close', () => {
//       array.forEach((i)=>{process.stdout.write(`${i}\n`)})
//     })
// });



// задача со скобочками
// let i=4;
// let array=[];
// lexicOrder(i)
// comb(i)

// function fact(num)
// {
//   if (num===0){return 1}
//   else {return num*fact(num-1)}
// }
// function lexicOrder(n){
//   let cn=(fact(2*n))/(fact(n)*fact(n+1));
//   console.log(`Число Каталана равно ${cn}`);
// }
// function add0(x,n='0'){
//   if(n.length===x){return n}
//   else{return add0(x,n+'0')}
// }
// function begin(n){//начальное десятичное число
//   return Math.pow(2,n-1)-1
// }

// function fill(xx,n){
//   let fill=(n-1)*2
//   if(xx.length===fill){return xx}
//   else {return add0(fill-xx.length)+xx}
// }

// function comparison(xx){
//   let ar=[];
//   let left=0;
//   let right=0;
//   for(i=xx.length;i>0;i--){ar.unshift(xx[i-1])};
//   ar.forEach((x)=>{if(x==='0'){left++}else{right++}})
//   if(left===right){return true}
//   else{return false}
// }

// function comb(n){
//   let min=begin(n)
//   let max=begin(n)<<n-1
//   let goodNumbers=[];
//   console.log(`min ${min}`)
//   console.log(`max ${max}`)
//   while(min<max){
//     comparison(fill(min.toString(2),n))===true?goodNumbers.push(min.toString(2)):0
//     min++;
//   }
//   console.log(goodNumbers)
//   printParentheses(goodNumbers,n)
// }

// function printParentheses(arr,n){
//   arr.forEach((x)=>{console.log('('+ fill(x,n).replaceAll("1", ")").replaceAll("0", "(") +')')})
// }









// let nm='3 3'.split(' ');
// let array=[1,20,1];
// ///////без бинарного поиска '3 3' [1,20,1] за 12 итераций с ним 5////////
// let n=Number(nm[0]);
// let time=Number(nm[1]);
// let maxCookies=Math.max(...array); //максм кол-во печенек в одном месте 
// let allCookies=findAllCookies();
// let kMin=Math.ceil(allCookies/time);//миним числитель
// let k=kMin;//текущий числитель
// let kLast=k;
// function findAllCookies() {
//   return array.reduce((cSum, i) => cSum + i, 0);
// }
// function up(){
//   kLast=k;
//   k=Math.ceil((k+maxCookies)/2);
//   let sum=divisions();
//   if(sum>time){up()}
//   else if(sum<=time){kMin=k;maxCookies=k;down()}
// }
// function down(){
//   if(kLast+1===k){console.log(k)}
//   else{
//     k=Math.ceil((kLast+maxCookies)/2);
//     kLast=k;
//     let sum=divisions();
//     if(sum>time){up()}
//     else if(sum<=time){kMin=k;maxCookies=k;down()}
//   }
// }
// function divisions() {//общее кол-во делений
//   return array.reduce((q, i) => q + Math.ceil(i / k), 0);
// }
// if(allCookies===0){console.log(0)} //если в офисе нет печенек
// else if(time<n){console.log(0)}//если Фёдор не успеет съесть все печеньки за выделенное время
// else{
//   let sum=divisions();
//   if(sum<=time){console.log(k)}
//   else if(sum>time){up()}//начинаем бинарный поиск
// }







// //удали не определённых букв
// let a = 'Hello dear world!! You are wery beautiful place!';
// let b=a.replace(/[aeioyu]/gi, '');
// console.log(b)

function hello(){
  console.log('hello! ;)')
};
hello();
