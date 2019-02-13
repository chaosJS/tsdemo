// 函数
function findPeople(age: number): string {
    return `找到了${age}岁的小姐姐`
}
let age1: number = 18;
let result: string = findPeople(age1)

console.log(result)

// 箭头函数
let arrowFunc = (age: string): string => {
    return `sssss${age}`
}

// 可选参数的函数
function func1(params: string, p3: any, p2?: number): string {
    //必选参数不能位于可选参数后。ts(1016)
    return 'sss'
}

// 默认参数的函数
function func2(params: string, p3: any = true, p2?: number): string {
    return 'sss'
}
// 结构参数
function func3(params: string[]): string {
    let temp: string = '找到了'
    params.map((v, i) => {
        temp += ',' + v
    })
    return temp
}
let arr: string[] = ['18', '大长腿', '水蛇腰']
let res1: string = func3(arr)

console.log(res1)

// ts中函数作用域

function func4(): void {
    var aa: string = 'sss';
    console.log(aa)
}
func4()