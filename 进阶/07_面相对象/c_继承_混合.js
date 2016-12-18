//这种方法用对象冒充继承属性，用原型链继承方法，代码如下

function ClassA(sColor)
{
    this.color = sColor;
}

ClassA.prototype.sayColor = function ()
{
    alert(this.color);
};

function ClassB(sColor, sName)
{
    ClassA.call(this.sColor);
    this.name = sName;
}

ClassB.prototype = new ClassA();

ClassB.prototype.sayName = function ()
{
    alert(this.name);
};

//
var objA = new ClassA(" red ");
var objB = new ClassB(" blue ", " Nicholas ");
objA.sayColor();  // red
objB.sayColor();  // blue
objB.sayName();   // Nicholas