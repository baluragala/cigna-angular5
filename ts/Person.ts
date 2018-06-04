class Person {
  //parameter properties
  constructor(private _name: string, private _age: number) {}

  get Name() {
    return this._name;
  }

  set Name(value) {
    this._name = value;
  }

  get Age() {
    return this._age;
  }

  set Age(value: number) {
    this._age = value;
  }

  print() {
    console.log(`Name :${this.Name}, Age: ${this.Age}`);
  }
}

interface Permissable {
  haveRigthAttendane: () => boolean;
}

class Student extends Person implements Permissable {
  private _grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this._grade = grade;
  }

  haveRigthAttendane() {
    return true;
  }
}

let james = new Student("James", 26, "A");

console.log(james);
