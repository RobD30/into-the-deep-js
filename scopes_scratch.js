var foo;

foo = new Array(1,2,3); // never build a phantom array

foo = [1,2,3,]; // do

foo = new Object(); // dont do this either
foo.a = 1;
foo.b = 2;
foo.c = 3;

foo = {a:1,b:2,c:3}; // this is legit though.