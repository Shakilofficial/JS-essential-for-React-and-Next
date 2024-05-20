//functions in JavaScript

//regular function
function hello() {
  console.log("Hello World");
  //returned undefined
}

//function expression

const hello = function () {
  console.log("Hello World");
};

//named function expression
const hello = function hello() {
  console.log("Hello World");
};

//arrow function
const hello = () => {
  console.log("Hello World");
};

//anonymous function
function hello() {
  return function () {
    console.log("Hello World");
  };
}
