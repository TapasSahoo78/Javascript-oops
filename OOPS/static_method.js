class Test {
    static display() {
        return "static function";
    }
    // static display() {
    //     return "static method is invoked again"
    // }
    show() {
        document.writeln(Test.display() + "<br>");
    }
}

console.log(Test.display());

