interface Address {
  city: string;
  state: string;
}

interface Course {
  title: string;
  mode: string;
  price?: number;
  isOpen?: boolean;
  location: Address;
}

let angularClass: Course = {
  mode: "classroom",
  title: "a5",
  location: {
    city: "ny",
    state: "ny"
  }
};

// console.log(angularClass);

let resonse: Array<Course>;
console.log(resonse[0].isOpen);
