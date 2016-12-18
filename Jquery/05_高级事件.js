//命名空间
$('#demo').bind('click.myName',function(){});
$('#demo').unbind('click.myName');

//触发
$('#demo').trigger('click');

//奇数偶数点击
$('#demo').toggle(function(){},function(){});

//hover(),mouseOver和mouseOut切换
$('#demo').hover(function(){},function(){});