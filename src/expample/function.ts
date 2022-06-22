// 函数类型

// function addNum(arg1:number, arg2:number) :number {
//     return  arg1 + arg2
// }
// const addNumber = (arg1: number, arg2: number) => arg2 + arg1

let addNum:(x:number, y:number) => number

addNum = (arg1:number, arg2:number):number =>  arg2 + arg1

let arg3 = 3
addNum = (arg1:number, arg2:number):number =>  arg2 + arg1 + arg3

interface AddNum{
    (x: number, y:number): number
}
// 使用类型别名定义函数
// type AddNum =  (x: number, y:number)=> number

// 可选参数
// let addFunc = (arg1,arg2,arg3) => arg1+arg2+arg3

type AddFun = (arg1:number, arg2:number, arg3?: number) => number

// 默认参数
const addFunctions = (x:number, y:number = 32):number => {
    console.info(x+y)
    return  x+y
}

addFunctions(1)

// 获取参数列表
