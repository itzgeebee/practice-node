// Import fs module
const fs = require('fs');

// Get the filepath for the input file
const filePath = `${__dirname}/input.txt`;

// read file synchronously
// const inputDataSync = fs.readFileSync(filePath, 'utf-8');

// console.log(inputDataSync)

// create a function to read and write output file asynchronously

const readWrite = async (inputFile) => {
    let data = ""
    fs.readFile(inputFile, 'utf-8', (err, result) => {
        if (err) {
            throw err
        }
        data = result.toString()

        data += " Extra words"

        fs.writeFile('output.txt', data, (err, dat) => {
            if (err) throw err;
            console.log("data has been written to output.txt")
        });        
    });
}

(async () => {
    await readWrite(filePath)
})();
// Assignment 
// Create an input.txt file 
// Read the the input.txt file synchronously and log it to the console
// Read the same input.txt file asynchronously and write the output into an output.txt file