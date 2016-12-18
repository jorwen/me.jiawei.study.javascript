//这种方法可以随时获得全局对象，因为其在函数中被当做函数调用了（不是通过new构造），this总 是指向全局对象。
var global = (function () {
   return this;
}());