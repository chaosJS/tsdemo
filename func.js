"use strict";
// 函数
function findPeople(age) {
    return "\u627E\u5230\u4E86" + age + "\u5C81\u7684\u5C0F\u59D0\u59D0";
}
var age1 = 18;
var result = findPeople(age1);
console.log(result);
// 箭头函数
var arrowFunc = function (age) {
    return "sssss" + age;
};
// 可选参数的函数
function func1(params, p3, p2) {
    //必选参数不能位于可选参数后。ts(1016)
    return 'sss';
}
// 默认参数的函数
function func2(params, p3, p2) {
    if (p3 === void 0) { p3 = true; }
    return 'sss';
}
// 结构参数
function func3(params) {
    var temp = '找到了';
    params.map(function (v, i) {
        temp += ',' + v;
    });
    return temp;
}
var arr = ['18', '大长腿', '水蛇腰'];
var res1 = func3(arr);
console.log(res1);
// ts中函数作用域
function func4() {
    var aa = 'sss';
    console.log(aa);
}
func4();
