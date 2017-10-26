function foo() {
    var bar = 'bar';

    function baz() {
        console.log(bar);
    } ;
}

function bam() {
    foo()();
}

back();