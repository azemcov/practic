let a:number|string='42';
let b:{b1:number,b2:number,b3f:(inc:number)=>string}={
    b1:11,
    b2:22,
    b3f(inc){
        console.log(`console: all gud: ${inc}`)
        return `string: all gud: ${inc}`
    }
}
interface InterfaceN1 {
    readonly name: string;
    age: number;
}

interface InterfaceN2 extends InterfaceN1 {
    city:string;
    reside:number;
    online:boolean;
    later:(income:number)=>number
}

let c:InterfaceN1={
    name:'Alex',
    age:34
}


let common:InterfaceN2;
common={
    name:'Alex',
    age:34,
    city:'string',
    reside:42,
    online:true,
    later:(income)=>42+this.reside
}

type TypeArray = boolean[]
let booleanArray:TypeArray=[true,true,false]

type TypeFunction=(inc:number)=>number;
let newFunction:TypeFunction=(inc)=>{
    return inc
}
let newFunction2:TypeFunction=function(inc){
    return inc
}
newFunction(4)
newFunction2(3)

//перегрузки
function getCar (name: string): string
function getCar (name: string, price: number): string
function getCar (name: string, price?: number): string {
    return price ? `Название ${name}, Цена ${price}`: `Название ${name}`
}

const car1 = getCar('bmw');
const car2 = getCar ('bmw',100000);
//const car = getCar ('bmw',188000, 'rwegf');


