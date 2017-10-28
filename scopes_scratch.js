function foo(who) {
    this.me = who;
}

Foo.prototype.identify = function() {
    return 'I am ' + this.me;
};

var a1 = new Foo('a1');
a1.identify();

a1.identify = function() {
    alert('Hello, ' + Foo.prototype.identify.call(this) + '.');
};

a1.identify();