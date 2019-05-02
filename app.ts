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

console.log(complex.myFunc(20))