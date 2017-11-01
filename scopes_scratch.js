var foo = '123';
var baz = parseInt(foo, 10);
baz;

baz = Number(foo);
baz;

baz = +foo;
baz;

baz = 456;
foo = baz.toString();
foo;

foo = String(baz);
foo;