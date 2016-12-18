//1.命以大写字母写构造函数，使用小写命名的函数和方法不应该使用new调用：
function MyConstructor() {}
function myFunction() {}

//2.常数
var PI = 3.14,
    MAX_WIDTH = 800;

//3.公共私有方法
//getName()就表示公共方法，部分稳定的API。而_getFirst()和_getLast()则表明了私有。
var person = {
    getName: function () {
        return this._getFirst() + ' ' + this._getLast();
    },

    _getFirst: function () {
        // ...
    },
    _getLast: function () {
        // ...
    }
};