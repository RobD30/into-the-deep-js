class Foo {
    constructor(who) {
        this.me = who;
    }
    identify() {
        return 'I am ' + this.me;
    }
}

class Bar extends Foo {
    identify() {
        alert('Hello, ' +super.identify() + '.');
    }
}

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1 .identify();
b2.identify();