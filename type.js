"use strict";
// 变量类型
var age = 18.6;
console.log(age);
var myName = 'chaos';
console.log(myName);
var b = true; // 只能是true/false
console.log(b);
// 枚举类型
var SEASON;
(function (SEASON) {
    SEASON[SEASON["spring"] = 0] = "spring";
    SEASON[SEASON["summer"] = 1] = "summer";
    SEASON[SEASON["autumn"] = 2] = "autumn";
    SEASON[SEASON["winter"] = 3] = "winter";
})(SEASON || (SEASON = {}));
var SEASON2;
(function (SEASON2) {
    SEASON2["spring"] = "\u6625";
    SEASON2["summer"] = "\u590F";
    SEASON2["autumn"] = "\u79CB";
    SEASON2["winter"] = "\u51AC";
})(SEASON2 || (SEASON2 = {}));
console.log(SEASON.spring); // 0
console.log(SEASON2.spring); // 春
// any 类型
var t = 'sss';
t = 0; //可行
t = true; //可行
