"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Father.prototype.interest = function () {
        console.log('找妹子');
    };
    return Father;
}());
var chaos = new Father('chaos', 18, 'coding');
chaos.interest();
// 继承
var MySon = /** @class */ (function (_super) {
    __extends(MySon, _super);
    function MySon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.face = '帅气';
        return _this;
    }
    /**
     * name
     */
    MySon.prototype.makeMoney = function () {
        console.log('赚钱');
    };
    // 重写 父类方法
    /**
     * name
     */
    MySon.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('开银行');
    };
    return MySon;
}(Father));
var chaoJr = new MySon('littleChaos', 5, 'singing');
chaoJr.interest();
chaoJr.makeMoney();
