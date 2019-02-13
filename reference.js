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
