// 引用类型
let me = {
    name: 'chaos',
    age: 18,
    say() {
        console.log(`my name is ${this.name}`)
    }
}
me.say()

let arr1: string[] = ['1', '2'];
let arr2: number[] = [1, 2];
let arr3: Array<string> = ['1,2', 'das'];
let arr4: Array<number> = [1, 2, 4];

// 元祖
let x: [string, number]
x = ['hello', 10];

// date类型

let date: Date = new Date();
let date1: Date = new Date('2018-01-13 06:56');

//regExp

let reg: RegExp = new RegExp('\\d+', 'gi');
let reg1: RegExp = /\\w+/gi;

reg.test('ads12asf');
reg.exec('ads12asf');


