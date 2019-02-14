"use strict";
// 引用类型
var me = {
    name: 'chaos',
    age: 18,
    say: function () {
        console.log("my name is " + this.name);
    }
};
me.say();
var arr1 = ['1', '2'];
var arr2 = [1, 2];
var arr3 = ['1,2', 'das'];
var arr4 = [1, 2, 4];
// 元祖
var x;
x = ['hello', 10];
// date类型
var date = new Date();
var date1 = new Date('2018-01-13 06:56');
//regExp
var reg = new RegExp('\\d+', 'gi');
var reg1 = /\\w+/gi;
reg.test('ads12asf');
reg.exec('ads12asf');
