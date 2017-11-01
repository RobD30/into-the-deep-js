var foo = '123';
var baz = foo - 0;
baz; // 123

baz = foo - '0';
baz; // 123

baz = foo /1;
baz; // 123

baz = 456;
foo = baz + '';
foo; // "456"

foo = baz - '';
foo; // 456 ... Wat!?!