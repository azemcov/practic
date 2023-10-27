let a:number=42;
let b:{b1:number,b2:number,b3f:(inc:number)=>string}={
    b1:11,
    b2:22,
    b3f(inc){
        console.log(`console: all gud: ${inc}`)
        return `string: all gud: ${inc}`
    }
}

