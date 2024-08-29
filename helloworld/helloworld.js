//Setup our server

//A few ways of declaring variables 
var name = "John"
var age = 23.5
let lastName = "Smith"  
const year = 2024
// JavaScript Object Notation AKA JSON printer.color 
var printer = {
    color:"black",
    size:"small",
    price:29.99
}

//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)

const http = require('http') //Puts the required module into a contant called http
//Define the port the app will be access from (80,8080,8888 are default to the domain /)
const PORT = process.env.PORT || 3000;
// The HTTP module can create an HTTP server that listens to server 

// Use the createServer() method to create an HTTP server:
const server = http.createServer( (request,response) => {
    console.log(request)
    console.log("Responding to request")
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Hello World")
})

//start the server 
server.listen(PORT, () => console.log(`server started on port ${PORT}  press ctrl + c to stop` ))


//server.listen(PORT)`