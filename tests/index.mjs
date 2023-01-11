// const fileSystem = require('fs');

// import {add, subtract} from './mod.js'

// node style callback
// function nodeStyleCallback(err, data) {
//     if (err){
//         throw err
//     }
//     else {
//         console.log(data)
//     }
// }

// console.log("This is the test index");

// const data = fs.readFileSync("../data/data.json", "utf-8");

// const data2 = async () => {
//     fs.readFile("../data/data.json", "utf-8", (err, data) => {
//         if (err) throw err;
//         console.log(data, "data");
//         fs.readFile("../data/start.txt", "utf-8", (err, data1) => {
//             if (err) throw err;
//             console.log(data1, 'txt');
//         });
//     return data;
// }); 
// };

// console.log(data2())
// console.log(data)
// const asyncExample = () => {
//     const newData = fileSystem.readFile('./example.txt', 'utf-8',
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log(data, "data from async")
//                         return data
//                     });
//                 };


// const example = fileSystem.readFileSync('./example.txt', 'utf-8');
// console.log(example);
// console.log("some other thing")
// console.log(asyncExample(), "asyncExample")



// local modules

// es syntax. You have to specify as a module for node to be able to work
// import {add, subtract} from './mod.js';

// const addSomething = add(1, 2);

// console.log(addSomething)

// commonjs syntax

// const {add, subtract} = require('./mod')

// const addSomething = add(1, 2);
// const subtractSomething = subtract(4, 3)

// console.log(addSomething);
// console.log(subtractSomething);


// Third party modules

// const chalk = require('chalk');
import chalk from "chalk";

console.log(chalk.blue("Red something"));

// Assignment 
// Create an input.txt file 
// Read the the input.txt file synchronously and log it to the console
// Read the same input.txt file asynchronously and write the output into an output.txt file


