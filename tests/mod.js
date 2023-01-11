console.log("This is the test module");

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const test = "This is an object trick"

const myObject = {
    test
};

console.log(myObject)

module.exports = {
    add,
    subtract
}



