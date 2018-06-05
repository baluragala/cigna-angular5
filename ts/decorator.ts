/*

1.class
2.method
3.accessor
4.parameter

*/

function readonly(target: Function) {
  let newConstructor = function() {
    target.apply(this, arguments);
    Object.freeze(this);
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <any>newConstructor;
}

@readonly
class Course {
  constructor(public title: string, public mode: string) {}
}

let c1 = new Course("Angular", "online");
let c2 = new Course("Vue", "online");
c1.title = "React";
console.log(c1);
