/*
// 基本数据类型
// let num = 25 // 整型
// let flo = 25.5 // 浮点类型
// let hex = 0xf000 // 16进制
// let binary = 0b1001 // 2进制
// let octal = 0o733 // 8进制

// 重新赋值
// num = '25' // 不能存储非原有类型数据：不能将类型“"25"”分配给类型“number”。ts(2322)
// num = 25.5

// ts原型
let num = 25
// // 等同于
// let num:number=25



// boolean
let isLogin = false // let isLogin:boolean=false
// 更改
// isLogin = 1 // 不行


// string
let str: string = 'hello world'

let anything; // let anything: any
anything = 25
anything = 'hello' // 不报错
*/



/*
// 数组 元组 枚举
// let names:Array<string> = ['henry','bucky']
// names[0] = 'hello'
// names = ['hello']
// console.log(names)
// let numbers:Array<number> = [1,2] // 等价于：let numbers:number[] = [1,2]
// let anyArray: any[] = ['hehe',1,false]

// 元组
// let colors: [string,number] = ['hello',99]

// enum
enum Color{
    Black, // 0
    Yellow = 100, // 1
    Red,
}
let myColor: Color = Color.Red
console.log(myColor) 
*/



/*
// 函数的相关类型
// 返回值类型
function returnValue():string{
    return 'hello'
}
// console.log(returnValue())

// 空 函数没有任何返回值
function sayHello():void{
    console.log('hello !@')
}

// 参数类型
function sumValue(value1:number,value2:number):number{
    return value1 + value2
    // return value1 * value2 // 如果两个参数中有一个不是数值 那么返回的是NaN
}

// console.log(sumValue(1,2))

// 函数类型
let myFunc: (a:number,b:number) => number
// myFunc = sayHello
// myFunc()
myFunc = sumValue
console.log(myFunc(5,5))
*/



/*
// object & type
let dataObj: {name:string,age:number} = {
    name: 'Henry',
    age: 31,
}

dataObj = {
    name: 'hello',
    age: 12,
}

// 复杂对象类型
let complex:{data:number[],myFunc:(item:number)=>number[]} = {
    data: [1,2,34],
    myFunc: function(item:number):number[]{
        this.data.push(item)
        return this.data
    }
}

// console.log(complex.myFunc(20))

// type 生成类型
type MyType = {data:number[],myFunc:(item:number)=>number[]}

let complex2:MyType = {
    data: [1,2,34],
    myFunc: function(item:number):number[]{
        this.data.push(item)
        return this.data
    }
}
*/



/*
// union type 检查类型 null undefined never
// union type
let unionType: number | string | boolean = 12
unionType = '12'
unionType = true

// 检查类型
let checkType = 10
if(typeof checkType == 'string'){
    console.log('number')
}

// null 和 undefined
let myNull = null
myNull = undefined

// never
// never类型是任何类型的子类型,也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。即使any也不可以赋值给never。
// 通常表现为抛出异常或无法执行到终止点（例如无限循环）。
let x:never
// x = 123 // 不能将其他类型转为never类型:不能将类型“123”分配给类型“never”。ts(2322)
// never的应用场景 抛出异常
function error(message:string):never{
    throw new Error(message)
}
// 死循环
function loop():never{
    while(true){}
}

let y:number
y = (()=>{
    throw new Error('message')
})()
*/


/*
// 练习
type sumValue = {money:number,count:(val:number)=>void}

let sumValue: sumValue = {
    money: 200,
    count(value:number):void{
        this.money += value
    }
}

let handleCount:{
    name:string,
    sumValue:sumValue,
    friends:string[],
} = {
    name: 'Henry',
    sumValue: sumValue,
    friends:['bucky','elyse'],
}
handleCount.sumValue.count(500)
console.log(handleCount)
*/



