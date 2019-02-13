// 变量类型
let age: number = 18.6;
console.log(age)

let myName: string = 'chaos';
console.log(myName)

let b: boolean = true; // 只能是true/false
console.log(b)

// 枚举类型
enum SEASON { spring, summer, autumn, winter }
enum SEASON2 { spring = "春", summer = "夏", autumn = "秋", winter = "冬" }
console.log(SEASON.spring)// 0
console.log(SEASON2.spring) // 春


// any 类型
let t: any = 'sss';
t = 0; //可行
t = true; //可行


