// type myFuncType = (a: string, b: string, c: string) => string;
// let makeName: myFuncType = function(first: string, last: string): string {
//   return `${first} ${last}`;
// };
// let username1: string;
// username1 = makeName("bala", "ragala", "");
var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredResult = myNums.filter(function (n, i) {
    return n > 6;
});
console.log(filteredResult);
function add(p, q, r) {
    if (typeof p == "string" && typeof q == "string") {
    }
    if (typeof p == "number" && typeof q == "number") {
    }
}
////add("bala");
function push(ele) {
    var result = [];
    result.push(ele);
}
push(10);
push("10");
