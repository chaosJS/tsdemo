// 类
class XiaoJieJie {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`hi.. my name is ${this.name} `)
    }
}

let meizi: XiaoJieJie = new XiaoJieJie('marry', 18);
meizi.say()

// 修饰符 public protected private
class XiaoJieJie2 {
    public gender: string
    protected name: string
    private age: number
    public constructor(name: string, gender: string, age: number) {
        this.name = name
        this.gender = gender
        this.age = age
    }
    public sayHello() {
        console.log(`hi.. my name is ${this.name} and my age is ${age} `)
    }
    private sayLove() {
        console.log(`i love you`)

    }
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
}
let meizi2: XiaoJieJie2 = new XiaoJieJie2('marry', 'female', 18);
// meizi2.name

// readonly

class Male {
    public readonly gender: string = 'male'
}

var man1: Male = new Male();
// man1.gender = 'female'; 只读属性