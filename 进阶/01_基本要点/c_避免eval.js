// 反面示例
var property = "name";
alert(eval("obj." + property));

// 更好的
var property = "name";
alert(obj[property]);

function myFunc(a,b,c){}
// 反面示例
setTimeout("myFunc()", 1000);
setTimeout("myFunc(1, 2, 3)", 1000);

// 更好的
setTimeout(myFunc, 1000);
setTimeout(function () {
   myFunc(1, 2, 3);
}, 1000);

//如果你绝对必须使用eval()，你 可以考虑使用new Function()代替
//有一个小的潜在好处，因为在新Function()中作代码评估是在局部函数作用域中运行，
// 所以代码中任何被评估的通过var 定义的变量都不会自动变成全局变量。
// 另一种方法来阻止自动全局变量是封装eval()调用到一个即时函数中。
var jsstring = "var deux = 2; console.log(deux);";
new Function(jsstring)(); // logs "2"

jsstring = "var trois = 3; console.log(trois);";
(function () {
   eval(jsstring);
}()); // logs "3"