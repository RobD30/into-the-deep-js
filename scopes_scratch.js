var foo = '123';
if (foo) {
    alert('Sure.');
}

foo = 0;
if (foo) {
    alert('Right.');
}
if (foo == false) {
    alert('Yeah.');
}

var baz = foo || 'foo';
baz;