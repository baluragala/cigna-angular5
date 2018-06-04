var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //parameter properties
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.print = function () {
        console.log("Name :" + this.Name + ", Age: " + this.Age);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this._grade = grade;
        return _this;
    }
    Student.prototype.haveRigthAttendane = function () {
        return true;
    };
    return Student;
}(Person));
var james = new Student("James", 26, "A");
console.log(james);
