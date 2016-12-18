function foo() {} // 声明，因为它是程序的一部分

var bar = function foo() {}; // 表达式，因为它是赋值表达式的一部分

new function bar() {}; // 表达式，因为它是new表达式

(function ()
{
    function bar() {} // 声明，因为它是函数体的一部分
})();