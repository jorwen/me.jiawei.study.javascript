//attr高级用法，设置属性
$('*').attr('title',function(index){
    return 'hello ' + index + this.id;
});

//所以外部链接用新页面打开
$("a[href^=http]").attr("target","_blank");

//避免重复提交
$("form").submit(function(){
    $(":submit",this).attr("disabled",true);
});