class Foo {
    this.me = who;
}
Foo.prototype.identify = function () {
    return 'I am ' + this.me;
};


function Bar(who) {
    Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

bar.prototype.speak = function() {
    alert('Hello, ' + this.indentify() + '.');
};

var b1 = Object.creat(Bar.prototype);
Bar.call(b1, 'b1');
b1.speak();
