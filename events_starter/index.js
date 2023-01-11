const events = require('events');


// create an event emitter object
const eventEmitter = new events.EventEmitter();

// create an event handler
const newEventHandler = () => {
    console.log("new connection");

    eventEmitter.emit("data_received");
    eventEmitter.emit("sodiq");
};

const clickEventHandler = () => {
    console.log("something has been clicked")
}

// listen for a click event
eventEmitter.on('click', clickEventHandler);


// Bind the connection event with the handler  
eventEmitter.on("connection", newEventHandler);

// Bind the data_received event with the anonymous function  
eventEmitter.on("data_received", () => {
    console.log("data has been received")
});
eventEmitter.on('sodiq', () => {
    console.log('Sodiq has been called')
});

// fire the connection event
eventEmitter.emit("connection")

const randomArray = [1, 3, 5, 6, 7, 8]

randomArray.forEach(num => {
    if (num === 6) {
        eventEmitter.emit('click')
    }
});

// Create a program that uses events to read and write files


