/*

1.class
2.method
3.accessor
4.parameter

*/
function readonly(target) {
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        target.apply(this, args);
        Object.freeze(this);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
var Course = /** @class */ (function () {
    function Course(title, mode) {
        this.title = title;
        this.mode = mode;
    }
    return Course;
}());
var c1 = new Course("Angular", "online");
var c2 = new Course("Vue", "online");
c1.title = "React";
console.log(c1);
