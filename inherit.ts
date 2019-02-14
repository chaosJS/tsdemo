class Father {
    public name: string
    public age: number
    public skill: string
    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill
    }

    public interest() {
        console.log('找妹子')
    }
}

let chaos: Father = new Father('chaos', 18, 'coding');
chaos.interest();

// 继承

class MySon extends Father {
    public face: string = '帅气'
    /**
     * name
     */
    public makeMoney() {
        console.log('赚钱')
    }

    // 重写 父类方法
    /**
     * name
     */
    public interest() {
        super.interest();
        console.log('开银行')
    }
}

let chaoJr: MySon = new MySon('littleChaos', 5, 'singing')
chaoJr.interest();
chaoJr.makeMoney();
