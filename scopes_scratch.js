var now  = +new Date();
// now = Date.now(); // ES5 only!

var foo = 'foo';
// `N -> -(N+1)
if (~foo.indexOf('f')) {
    alert('Fount it!');
}