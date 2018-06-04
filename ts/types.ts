var username: string;
username = "angular";

let message = `
<div>
    <p>Hello ${{ name: username.toUpperCase() }}</p>
</div>`;

console.log(message);
//type inference
//type annotation

let numbers: Array<number> = [1, 2, 3, 4, 5];
//numbers.push("q");

enum Status {
  OK = 9000,
  WARN,
  ERROR
}

let responseStatus: Status;
responseStatus = Status.ERROR;
console.log(responseStatus);

let something: any;

something = 10;
something = [];
something = "";

function addCourse(course: any): void {}

let myStatus: Status | string | boolean = "OK";
myStatus = Status.ERROR;
myStatus = "SOME";
myStatus = true;
