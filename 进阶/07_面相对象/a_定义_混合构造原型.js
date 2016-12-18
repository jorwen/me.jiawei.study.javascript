function Car(sColor, iDoors, iMpg)
{
    this.color = sColor;
    this.doors = iDoors;
    this.mpg = iMpg;
    this.drivers = new Array("Mike", "Sue");
}

Car.prototype.showColor = function ()
{
    alert(this.color);
};

//测试
var oCar1 = new Car("red", 4, 23);
var oCar2 = new Car("blue", 3, 25);

oCar1.drivers.push("Matt");

alert(oCar1.drivers);  // outputs “Mike,Sue,Matt”
alert(oCar2.drivers);  // outputs “Mike,Sue”