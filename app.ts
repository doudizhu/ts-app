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

let anything;
anything = 25
anything = 'hello' // 不报错
