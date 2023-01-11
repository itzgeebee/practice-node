const fs = require('fs');

const folderPath = '../data/';
let data = [];

// // Create a readable stream
// let readStream = fs.createReadStream(`${folderPath}longessay.txt`, "utf-8");

// // // handle stream events -> data, end, error
// readStream.on('data', (dataFromReadStream) => {
//     data.push(dataFromReadStream);
//     // console.log(dataFromReadStream)
// });

// readStream.on('end', () => {
//     data = data.join();
//     console.log(data);
// });

// readStream.on('error', (err) => {
//     console.error(err.stack);
// });

const outputData = "I want to write some data with the write stream into the output file"

// Create a writable stream  
const writeStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8  
writeStream.write(outputData, "utf-8", (data) => {
    // if (err) throw err;
    console.log(data)
});

// // Mark the end of the file
writeStream.end();

// //  Handle stream events -> finish, and errir
writeStream.on('finish', () => {
    console.log('completed')
})

writeStream.on('error', (err) => {
    throw err
})


// Assignment pipe the out writestream to a file and log it to the console with the readstream

// console.log("ended")

let AssignmentReadStream = fs.createReadStream('output.txt', 'utf-8');

AssignmentReadStream.on('data', (dataFromOutputFile) => {
    console.log(dataFromOutputFile)
})

AssignmentReadStream.on('error', (err) => {
    console.error(err)
});
