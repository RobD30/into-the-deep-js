var foo = '123';
var baz  = Boolean(foo);
baz;

baz = !!foo;
baz;

// Explicitly implicit!
baz = foo ? true : false;
baz;