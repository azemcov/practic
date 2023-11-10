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

interface InterfaceN2 {
    city:string;
    reside:number;
    online:boolean;
    later:(income:number)=>number
}

let c:InterfaceN1={
    name:'Alex',
    age:34
}

let obj:InterfaceN2={
    city:'feature 1',
    reside:2,
    online:true,
    later(income){
        return income+this.reside
    }
}

let common:InterfaceN1&InterfaceN2;
common={
    name:'Alex',
    age:34,
    city:'SPB',
    online:true,
    reside:2,
    later(income) {
        return income+this.reside
    }
}


