var username;
username = "angular";
var message = "\n<div>\n    <p>Hello " + { name: username.toUpperCase() } + "</p>\n</div>";
console.log(message);
//type inference
//type annotation
var numbers = [1, 2, 3, 4, 5];
//numbers.push("q");
var Status;
(function (Status) {
    Status[Status["OK"] = 9000] = "OK";
    Status[Status["WARN"] = 9001] = "WARN";
    Status[Status["ERROR"] = 9002] = "ERROR";
})(Status || (Status = {}));
var responseStatus;
responseStatus = Status.ERROR;
console.log(responseStatus);
var something;
something = 10;
something = [];
something = "";
function addCourse(course) { }
var myStatus = "OK";
myStatus = Status.ERROR;
myStatus = "SOME";
myStatus = true;
