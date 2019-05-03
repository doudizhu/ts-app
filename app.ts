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


/*
// class 类（属性，方法）
class Person{
    name: string // 公开的，当前类，或被继承子类，或类外部都可用，等价于public name: string,
    protected gender: string = '男'// 被保护的，当前类或被继承子类可用
    private age: number = 27 // 私有的，当前类可用

    constructor(name:string,public username:string){
        this.name = name
        this.username = username
    }

    printAge(age:number){
        this.age = age
        console.log(this.age)
        person.setGender(this.gender)
    }

    private setGender(gender:string){
        this.gender = gender
        // console.log(this.gender)
    }

    printName(name:string){
        this.name = name
        console.log(this.name)
    }
}

const person = new Person('米斯特吴','米修在线')
// console.log(person.name,person.username)

// person.printAge(30)


// student类 继承于 person类
class Student extends Person {
    studentId: number
    constructor(name:string,username:string,studentId: number){
        super(name,username)
        // console.log(this.gender) // yes
        // console.log(this.age) // no: 属性“age”为私有属性，只能在类“Person”中访问。ts(2341)
        this.studentId = studentId

        // this.setGender('女') // no
    }

    studentPrint(){
        console.log(this.studentId)
    }

    // 重写父类方法
    printName(name:string){
        this.name = name
        console.log(this.name)
    }
    
}
const misterwu = new Student('米斯特吴','米修在线1',2001)
console.log(misterwu)

misterwu.studentPrint()
misterwu.printAge(32)
misterwu.printName('ddd')
*/





/*
// 11.TypeScript-set和get和static
// 1.class set get修饰词 用于隔离私有属性 和 可公开属性
// 2.class 静态属性和方法
class Person{
    private _name: string = '米斯特吴'
    static PI: number = 3.14

    static calcCircle(value:number):number{
        return this.PI * value
    }
    
    // 私有属性赋值
    set setName(value:string){
        this._name = value
    }
    // 私有属性取值
    get getName(){
        return this._name
    }
}

let person = new Person()
// console.log(person.getName)
// person.setName = '米修在线'
// console.log(person.getName)
// console.log(person.PI)

console.log(Person.PI)
console.log(Person.calcCircle(8))
*/


/*
// namespace: 命名空间
namespace MyMath{
    export const PI = 3.14


    export function sumValue(num1:number,num2:number):number{
        return num1 + num2
    }

    export function calcCircle(value:number){
        return value * PI
    }
}

const PI = 2.88
console.log(MyMath.sumValue(5,10))
console.log(MyMath.calcCircle(25))
console.log(PI)
console.log(MyMath.PI)
*/




/*
// 13.TypeScript-命名空间文件拆分

console.log(MyMath.sumValue(10,5))
console.log(MyMath.calcCircle(8))
// tsc --outfile app.js circle.ts sumValue.ts app.ts
*/


/*
// 14.TypeScript-多重命名空间及引入文件
// 命名空间 多重命名空间
// console.log(MyMath.sumValue(10,5))
// console.log(MyMath.Circle.calcCircle(8))
// 引入文件
/// <reference path='circle.ts'/>
/// <reference path='sumValue.ts'/>
console.log(MyMath.sumValue(10,5))
console.log(MyMath.Circle.calcCircle(8))
// tsc app.ts --outfile app.js
*/



// 15.TypeScript-模块module的使用
// 模块
// import { PI, calcCircle } from './stuff/circle'
// import { sumValue } from './stuff/sumValue' // 注：加入default后不能引入
// console.log(PI)
// console.log(calcCircle(8))
// console.log(sumValue(8,12))
/**
 * 待优化：目前测试仅此条命令可通过
 * tsc --module amd app.ts
 * 其余两条不能通过
 * tsc --module commonjs app.ts
 * 和
 * tsc
 */
// import * as Circle from './stuff/circle'
// import sum from './stuff/sumValue'
// console.log(Circle.PI)
// console.log(Circle.calcCircle(8))
// console.log(sum(8,12))


/*
// 16.TypeScript-初识interface接口的用法
// interface 接口
interface Person{
    name: string,
    age: number, // :号，必须要写的
    sex?: string, // ?: 可选
    readonly salary: number, // 只读，不能修改
    [propName:string]:any,
    greet():void,
}
let person: Person = {
    name: '米斯特吴',
    age: 28,
    // sex: '男',
    salary:7000,
    ids:[1,5,10],
    greet(){
        console.log('hello everyone')
    },
}
// Person.salary = 1000 // 只读，不能修改:Cannot assign to 'salary' because it is a read-only property.ts(2540)
function printPerson(person:Person){
    console.log(`我叫${person.name}，我的年龄是${person.age}，我的工资是${person.salary}`)
}
printPerson(person)
person.greet()

// interface 可以继承； type不能继承
type Person2 = {
    name: string,
    age: number,
}
let Person2: Person2 = {
    name: '米斯特吴',
    age: 28,
}
*/


/*
// 17.TypeScript-接口继承及类的实现
// interface 接口
interface PersonInterface{
    name: string,
    age: number, // :号，必须要写的
    sex?: string, // ?: 可选
    readonly salary: number, // 只读，不能修改
    [propName:string]:any,
    greet():void,
}
interface StudentInterface{
    id: number
    course: string
}
// 接口应用到class中
class People implements PersonInterface,StudentInterface{
    name: string = '米斯特吴'
    age: number = 31
    salary: number = 8000
    id: number = 101
    course: string = 'it'
    greet(){
        console.log('hello world')
    }
}
// interface接口的继承
interface Employee extends PersonInterface{
    work: string
}

const employee: Employee = {
    name: '米斯特吴',
    age: 32,
    salary: 7000,
    greet(){
        console.log('hello world')
    },
    sex: '男',
    work: '前端开发',
}

console.log(employee)
*/




// 18.TypeScript-泛型Generic的函数应用
// TypeScript 中的泛型(Generic)

// 1）在函数中使用泛型
// function identify<T>(arg: T): T {
//   return arg
// }
// 可以明确指定类型
// console.log(identify<string>('string'))
// 交给ts推断类型
// console.log(identify(true))

// 2）在接口中使用泛型
/*
// 方式一：
interface GenericIdentify{
    <T>(arg:T):T
}
function identify<T>(arg: T): T {
  return arg
}
let myIdentify:GenericIdentify = identify
// 可以明确指定类型
console.log(myIdentify<string>('my-string'))
// 交给ts推断类型
console.log(identify(30))
*/
/*
// 方式二：泛型提升到接口层面
interface GenericIdentify<T>{
    (arg:T):T
}
function identify<T>(arg: T): T {
    return arg
}
let myIdentify:GenericIdentify<number | string> = identify

// 可以明确指定类型
console.log(myIdentify('my-string'))
// 交给ts推断类型
console.log(identify(30))
*/

// 3）为泛型添加约束
// function getLength<T extends { length:any } >(obj:T):any{
//     return obj.length
// }
// const obj = {
//     name: '米斯特吴',
//     age: 30,
//     length: 10,
// }

// console.log(getLength(obj))
// ps: 让当前泛型指定某一类型
// function getLength<T extends number >(obj:T):any{
//     return obj
// }

// const obj = 25

// console.log(getLength(obj))







// 19.TypeScript-泛型Generic类的应用
// 泛型-class
// 方式一：普通
// class CountNumber{
//     number1: any
//     number2: any

//     constructor(num1:number,num2:number){
//         this.number1 = num1
//         this.number2 = num2
//     }

//     calcalate():number{
//         return this.number1 * this.number2
//     }
// }
// const countNumber = new CountNumber(10,20)
// console.log(countNumber.calcalate())
// 方式二：泛型普通
// class CountNumber<T>{
//     number1: T
//     number2: T

//     constructor(num1:T,num2:T){
//         this.number1 = num1
//         this.number2 = num2
//     }

//     calcalate():number{
//         return +this.number1 * +this.number2
//     }
// }
// const countNumber = new CountNumber<string>('10','20')
// console.log(countNumber.calcalate())
// 方式三：泛型约束
class CountNumber<T extends number>{
    number1: T
    number2: T

    constructor(num1:T,num2:T){
        this.number1 = num1
        this.number2 = num2
    }

    calcalate():number{
        return this.number1 * this.number2
    }
}
const countNumber = new CountNumber<number>(12,20)
console.log(countNumber.calcalate())