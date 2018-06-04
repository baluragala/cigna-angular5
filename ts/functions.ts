// type myFuncType = (a: string, b: string, c: string) => string;

// let makeName: myFuncType = function(first: string, last: string): string {
//   return `${first} ${last}`;
// };

// let username1: string;
// username1 = makeName("bala", "ragala", "");

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredResult = myNums.filter((n, i) => {
  return n > 6;
});

console.log(filteredResult);

function add(x: string, y: string, z: string);
function add(a: number, b: number, c: number);
function add(p: string | number, q: string | number, r: number | string) {
  if (typeof p == "string" && typeof q == "string") {
  }

  if (typeof p == "number" && typeof q == "number") {
  }
}

////add("bala");

function push<T>(ele: T) {
  let result: T[] = [];
  result.push(ele);
}

push<number>(10);
push<string>("10");
