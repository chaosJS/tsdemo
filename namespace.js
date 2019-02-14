"use strict";
// 命名空间
var shuaiGe;
(function (shuaiGe) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '刘德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return DeHua;
    }());
    shuaiGe.DeHua = DeHua;
})(shuaiGe || (shuaiGe = {}));
var bajie;
(function (bajie) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '刘德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return DeHua;
    }());
    bajie.DeHua = DeHua;
})(bajie || (bajie = {}));
var dehua1 = new shuaiGe.DeHua();
var dehua2 = new bajie.DeHua();
dehua1.talk();
dehua2.talk();
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
