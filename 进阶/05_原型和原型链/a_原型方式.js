var Calculator = function (decimalDigits, tax)
{
    this.decimalDigits = decimalDigits;
    this.tax = tax;
};
Calculator.prototype = {
    add: function (x, y)
    {
        return x + y;
    },

    subtract: function (x, y)
    {
        return x - y;
    }
};
//调用
alert((new Calculator(2,3)).add(1, 3));

//继承
var SubCalculator = function () {
    //为每个实例都声明一个税收数字
    this.tax = 5;
};

SubCalculator.prototype = new Calculator();
alert((new SubCalculator()).tax);