// 下面2个括弧()都会立即执行

(function () { /* code */ } ()); // 推荐使用这个
(function () { /* code */ })(); // 但是这个也是可以用的

//举例子

// 这个代码是错误的，因为变量i从来就没背locked住
// 相反，当循环执行以后，我们在点击的时候i才获得数值
// 因为这个时候i操真正获得值
// 所以说无论点击那个连接，最终显示的都是I am link #10（如果有10个a元素的话）

var elems = document.getElementsByTagName('a');

for (var i = 0; i < elems.length; i++) {

    elems[i].addEventListener('click', function (e) {
        e.preventDefault();
        alert('I am link #' + i);
    }, 'false');

}

// 这个是可以用的，因为他在自执行函数表达式闭包内部
// i的值作为locked的索引存在，在循环执行结束以后，尽管最后i的值变成了a元素总数（例如10）
// 但闭包内部的lockedInIndex值是没有改变，因为他已经执行完毕了
// 所以当点击连接的时候，结果是正确的

var elems = document.getElementsByTagName('a');

for (var i = 0; i < elems.length; i++) {

    (function (lockedInIndex) {

        elems[i].addEventListener('click', function (e) {
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        }, 'false');

    })(i);

}