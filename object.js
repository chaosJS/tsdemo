"use strict";
// 类
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log("hi.. my name is " + this.name + " ");
    };
    return XiaoJieJie;
}());
var meizi = new XiaoJieJie('marry', 18);
meizi.say();
// 修饰符 public protected private
var XiaoJieJie2 = /** @class */ (function () {
    function XiaoJieJie2(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    XiaoJieJie2.prototype.sayHello = function () {
        console.log("hi.. my name is " + this.name + " and my age is " + age + " ");
    };
    XiaoJieJie2.prototype.sayLove = function () {
        console.log("i love you");
    };
    XiaoJieJie2.prototype.getName = function () {
        return this.name;
    };
    XiaoJieJie2.prototype.getAge = function () {
        return this.age;
    };
    return XiaoJieJie2;
}());
var meizi2 = new XiaoJieJie2('marry', 'female', 18);
// meizi2.name
// readonly
var Male = /** @class */ (function () {
    function Male() {
        this.gender = 'male';
    }
    return Male;
}());
var man1 = new Male();
// man1.gender = 'female'; 只读属性
