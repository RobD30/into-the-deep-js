class Foo {
    this.me = who;
}
Foo.prototype.identify = function () {
    return 'I am ' + this.me;
};

var Bar = Object.create(Foo.prototype);
Bar.init = function (who) {
    Foo.call(this, who);
};

Bar.speak = function() {
    alert('Hello, ' + this.indentify() + '.');
};

var b1 = Object.create(Bar);
Bar.init('b1');
b1.speak();
