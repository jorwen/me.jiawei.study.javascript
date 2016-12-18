//返回true表示匹配
$('td').filter(function(){
   return this.innerHTML.match(/^\d+$/);
});

//命令链过滤
$('img').addClass('classA').filter('[title*=dog]').addClass('classB');

//包含字符串
$('p').contains('hello');

//是否匹配的元素,至少1个就返回true
$('*').is("div");