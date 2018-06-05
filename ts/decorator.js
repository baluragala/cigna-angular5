/*

1.class
2.method
3.accessor
4.parameter

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readonly(target) {
    var newConstructor = function () {
        target.apply(this, arguments);
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
    Course = __decorate([
        readonly
    ], Course);
    return Course;
}());
var c1 = new Course("Angular", "online");
var c2 = new Course("Vue", "online");
c1.title = "React";
console.log(c1);
